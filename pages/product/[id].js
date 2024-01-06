import Center from "../../components/Center";
import React from 'react';
import Title from "../../components/Title";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import styled from "styled-components";
import WhiteBox from "../../components/WhiteBox";
import ProductImages from "../../components/ProductImages";
import Button from "../../components/Button";
import CartIcon from "../../components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { ReactSortable } from "react-sortablejs";
import Spinner from "../../components/Spinner";
import axios from "axios";
import mongoose from "mongoose";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;



const ErrorPopup = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #ff5252;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const Upload = styled.div`
align-items: center;
text-align: center;
border-radius: 8px;
width: 10vh;
height: 10vh;
font-size: 12px;
line-height: 10px
    `;

const Icon = styled.svg`
width: 70%
`

const Input = styled.input`
visibility: hidden
`

export default function ProductPage({ product, cartProducts, _id, title: existingTitle, description: existingDescription, images: existingImages, category: assignedCategory, properties: assignedProperties, options: assignedOptions, minWidth: assignedWidth, minHeight: assignedHeight }) {
  const router = useRouter();
  const { addProduct } = useContext(CartContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasUploadedImages, setHasUploadedImages] = useState(false);
  const [images, setImages] = useState(existingImages || []);
  const [isUploading, setIsUploading] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [newImages, setNewImages] = useState([]);


  const [selectedOptions, setSelectedOptions] = useState(() => {
    try {
      const storedOptions = localStorage.getItem('selectedOptions');
      console.log('Stored Options (Initial):', storedOptions);
      return storedOptions ? JSON.parse(storedOptions) : {};
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return {};
    }
  });

  const handleButtonClick = (optionIndex, individualOption) => {
    const newSelectedOptions = { ...selectedOptions };
    if (!newSelectedOptions[product._id]) {
      newSelectedOptions[product._id] = {};
    }
    newSelectedOptions[product._id][optionIndex] = individualOption;
    setSelectedOptions(newSelectedOptions);
  };

  useEffect(() => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);



  const addToCart = () => {
    const unchosenOptions = [];

    // Check each option individually
    product.options?.forEach((option, optionIndex) => {
      if (!selectedOptions[product._id]?.[optionIndex]) {
        unchosenOptions.push(option.title);
      }
    });

    if (unchosenOptions.length > 0) {
      // Show an error pop-up with the list of unchosen options
      setErrorMessage(`Vă rugăm să alegeți opțiunile pentru: ${unchosenOptions.join(', ')}.`);
      return;
    }

    addProduct(product._id, selectedOptions, product, newImages, images);
    console.log(product._id, selectedOptions, product, newImages, images)

    router.push({
      pathname: '/cart',
      query: {
        productId: JSON.stringify(product._id),
        product: JSON.stringify(product),
        selectedOptions: JSON.stringify(selectedOptions),
        newImages: JSON.stringify(newImages),
        images: JSON.stringify(images)
      },
    });
  };


  useEffect(() => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  useEffect(() => {
    setSelectedOptions({});
  }, []);

  useEffect(() => {
    // Update hasUploadedImages whenever images change
    setHasUploadedImages(images.length > 0);
  }, [images]);

  function updateImagesOrder(images) {
    setImages(images);
    setHasUploadedImages(images.length > 0);
  }

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append('file', file);
      }

      const res = await axios.post('/api/upload', data);

      // Check image resolutions before updating state
      const invalidImages = [];

      // Define a function to asynchronously check image resolutions
      async function checkImageResolution(link) {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve(img.width < product.minWidth || img.height < product.minHeight);
          };
          img.src = link;
        });
      }

      // Use Promise.all to wait for all image checks to complete
      await Promise.all(res.data.links.map(async (link) => {
        const isInvalid = await checkImageResolution(link);
        if (isInvalid) {
          invalidImages.push(link);
        }
      }));

      if (invalidImages.length > 0) {
        // Display error message for invalid images
        setErrorMessage('Resolutie nepotrivita');
        setIsUploading(false);
        return;
      }

      setImages(oldImages => {
        const updatedImages = [...oldImages, ...res.data.links];
        console.log('Images after upload:', updatedImages);
        setNewImages(updatedImages); // Set the newImages state
        return updatedImages;
      });

      setIsUploading(false);
    }
  }

  return (
    <>
      {/* Titlu */}
      <h1 className="text-center font-bold text-2xl md:text-5xl mb-6">
        {product.title}
      </h1>
      {/* Produs */}
      <div className="flex justify-center">
        <div className="max-w-7xl md:flex block">
          {/* Div Images + Descriere */}
          <div>
            {/* Images */}
            <WhiteBox>
              <ProductImages images={product.images} />
            </WhiteBox>
            {/* Descriere */}
            <div className="p-[30px] "><div className="text-xl font-semibold">Descriere:</div> {product.description}</div>
          </div>
          {/* Optiuni */}
          <div className="p-6">
            {/* H1 */}
            <h1 className="text-3xl flex font-semibold mb-1">
              <div className="mr-2 w-10 h-10 rounded-[50%] bg-black px-3 text-white">
                <span className="leading-10 ml-[2px]">
                  1
                </span>
              </div>
              Alege opțiunile
            </h1>
            {/* Text - p */}
            <p className="mb-6 text-gray-500">
              Pentru a afla costul, alegeți opțiunile care vă interesează.
              La scurt timp după plasarea comenzii veți fi telefonați de către administație.
            </p>
            {/* Optiuni */}
            <div>
              {product.options?.map((option, optionIndex) => (
                <div className="text-gray-500" key={optionIndex}>
                  {option.title}
                  <br />
                  <div className="flex">
                    {option.options?.map((individualOption, individualOptionIndex) => (
                      <button
                        className={`border-[1px] mr-3 p-2 hover:border-blue-500 hover:bg-slate-50  duration-150 ease-in-out rounded-lg mb-6 ${selectedOptions[product._id]?.[optionIndex] === individualOption ? "border-blue-500" : ""}`}
                        key={individualOptionIndex}
                        isActive={selectedOptions[product._id]?.[optionIndex] === individualOption}
                        onClick={() => handleButtonClick(optionIndex, individualOption)}>
                        {individualOption}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div >
            {/* Images Upload */}
            <div className="mb-4">
              {/* H1 */}
              <h1 className="text-3xl flex font-semibold mb-1">
                <div className="mr-2 w-10 h-10 rounded-[50%] bg-black px-3 text-white">
                  <span className="leading-10">
                    2
                  </span>
                </div>
                Adaugă imagini
              </h1>
              {/* Text - p */}
              <p className="mb-6 text-gray-500">
                Adaugă imagini doar dacă este specificat în descriere.
              </p>
              {/* Imagini titlu */}
              <label className="text-gray-500">
                Imagini
              </label>
              {/* Imagini logic */}
              <Upload className="flex flex-row mt-2 items-center">
                <ReactSortable
                  list={images}
                  className="flex flex-row"
                  setList={updateImagesOrder}
                >
                  {!!images?.length &&
                    images.map((link, index) => (
                      <div
                        key={link}
                        className="w-24 h-24 flex justify-center bg-white shadow-sm rounded-md border-2 border-gray-200 mr-4 flex flex-row"
                        onMouseEnter={() => setHoveredImageIndex(index)}
                        onMouseLeave={() => setHoveredImageIndex(null)}
                      >
                        <img src={link} alt="" className="rounded-lg object-contain" />
                        <div>
                          {hoveredImageIndex === index && (
                            <button
                              className="bg-[#B1B1B1] w-4 h-4 absolute rounded-[50%] justify-center flex align-center leading-5 mt-[-5px] ml-[-10px] text-sm z-20"
                              onClick={() => {
                                const updatedImages = [...images];
                                updatedImages.splice(index, 1);
                                setImages(updatedImages);
                              }}
                            >
                              <svg
                                className="w-2 mt-[4px]"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ fill: '#ffff' }}
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </ReactSortable>
                {/* Loader */}
                {isUploading && (
                  <div className="h-24 flex items-center mr-4">
                    <Spinner />
                  </div>
                )}
                {/* Image Uploader Input */}
                <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-md bg-white shadow-sm border border-primary">
                  <div className="w-10 h-10 mt-3 flex justify-center">
                    <Icon
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"

                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </Icon>
                  </div>
                  <div className="leading-4">Adaugă imagine</div>
                  <Input type="file" onChange={uploadImages} />
                </label>
              </Upload>
            </div>
            {/* Rezultat */}
            <div className="flex justify-around items-center mt-10 mb-2 bg-gray-200 rounded-md p-2">
              <div>
                <h1 className="text-2xl text-[#6F6F6F] font-semibold">
                  Rezultat:
                </h1>
                <p className="text-2xl text-black font-semibold">
                  {product.title}
                </p>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Opțiuni:</h1>
                <div>
                  {Object.keys(selectedOptions[product._id] || {}).length > 0 && (
                    <div>
                      {getSelectedOptionsString(selectedOptions).split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </div>
            {/* Add to cart */}
            <div className="flex justify-center duration-200 ease-in-out mb-20 text-white bg-[#453CF7] cursor-pointer hover:bg-[#3730b9] py-2 rounded-md">
              <button primary onClick={addToCart} className="flex gap-2">
                <CartIcon /> Adaugă la coș
              </button>
            </div>
          </div>
        </div>
      </div >
      <ErrorPopup visible={!!errorMessage}>
        <button
          className="bg-black w-6 h-6 absolute rounded-[50%] justify-center flex align-center leading-5 top-[-10px] right-[-10px] text-sm z-20"
          onClick={() => setErrorMessage('')}
        >
          <svg
            className="w-3 h-6"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#ffff' }}
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
        {errorMessage}
      </ErrorPopup>
    </>
  );
}


export async function getServerSideProps(context) {
  await mongoose.connect("mongodb+srv://two2tek:Pass2023@cluster0.deqdqov.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const { id } = context.query;
  const product = await Product.findOne({ _id: new mongoose.Types.ObjectId(id) });
  console.log("id", id);
  console.log("product", product);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    },
  };
}


function getSelectedOptionsString(selectedOptions) {
  let resultString = "";
  for (const productId in selectedOptions) {
    const productOptions = selectedOptions[productId];
    const optionsArray = Object.values(productOptions);

    if (optionsArray.length > 0) {
      resultString += optionsArray.join('\n') + '\n';
    }
  }
  return resultString.trim(); // Trim to remove any leading/trailing whitespace
}

