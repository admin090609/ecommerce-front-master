import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { ReactSortable } from "react-sortablejs";
import Spinner from "@/components/Spinner";
import axios from "axios";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

const OptionButton = styled.button`
  border-width: 1px;
  margin-right: 0.75rem;
  padding: 0.5rem;
  border-color: ${props => (props.isActive ? '#1a365d' : '#3b82f6')};
  background-color: ${props => (props.isActive ? '#a0aec0' : '#f8fafc')};
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  border-radius: 0.5rem;
  margin-bottom: 5rem;

  &:hover {
    border-color: #1e4bb5;
    background-color: #cbd5e1;
  }
};`



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
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const Upload = styled.div`
justify-content: center;
align-items: center;
border: 2px gray solid;
text-align: center;
border-radius: 8px;
width: 10vh;
height: 10vh;
font-size: 12px;
line-height: 10px
flex-direction: column;
    `;

const Icon = styled.svg`
width: 70%
`

const Input = styled.input`
visibility: hidden
`

export default function ProductPage({ product, _id, title: existingTitle, description: existingDescription, price: existingPrice, images: existingImages, category: assignedCategory, properties: assignedProperties, options: assignedOptions, minWidth: assignedWidth, minHeight: assignedHeight }) {
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
      setErrorMessage(`Please choose options for: ${unchosenOptions.join(', ')}`);
      return;
    }

    if (!hasUploadedImages) { // Check if images have been uploaded
      // Show an error pop-up
      setErrorMessage('You must upload at least one image.');
      return;
    }

    addProduct(product._id, selectedOptions, product, newImages, images);
    router.push({
      pathname: '/cart',
      query: {
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
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>

            <div>
              <label>
                Imagini
              </label>
              <Upload>
                <ReactSortable
                  list={images}
                  className="flex flex-wrap gap-1"
                  setList={updateImagesOrder}
                >
                  {!!images?.length &&
                    images.map((link, index) => (
                      <div
                        key={link}
                        className="h-24 w-24 bg-white shadow-sm rounded-md border border-gray-200 overflow-hidden mr-4 flex"
                        onMouseEnter={() => setHoveredImageIndex(index)}
                        onMouseLeave={() => setHoveredImageIndex(null)}
                      >
                        <img src={link} alt="" className="rounded-lg w-24 h-24" />
                        {hoveredImageIndex === index && (
                          <button
                            className="absolute text-white p-[4px] mt-1 ml-1 text-sm z-20"
                            onClick={() => {
                              const updatedImages = [...images];
                              updatedImages.splice(index, 1);
                              setImages(updatedImages);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ fill: '#ffff' }}
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                </ReactSortable>
                {isUploading && (
                  <div className="h-24 flex items-center">
                    <Spinner />
                  </div>
                )}
                <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-md bg-white shadow-sm border border-primary">
                  <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </Icon>
                  <div className="leading-4">Adaugă imagine</div>
                  <Input type="file" onChange={uploadImages} />
                </label>
              </Upload>
            </div>

            <div>
              {product.options?.map((option, optionIndex) => (
                <div key={optionIndex}>
                  {option.title}
                  <br />
                  {option.options?.map((individualOption, individualOptionIndex) => (
                    <OptionButton
                      key={individualOptionIndex}
                      isActive={selectedOptions[product._id]?.[optionIndex] === individualOption}
                      onClick={() => handleButtonClick(optionIndex, individualOption)}>
                      {individualOption}
                    </OptionButton>
                  ))}
                </div>
              ))}
              <div>
                {Object.keys(selectedOptions[product._id] || {}).length > 0 && (
                  <div>
                    Selected Options: {getSelectedOptionsString(selectedOptions)}
                  </div>
                )}
              </div>
            </div>

            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div>
                <Button primary onClick={addToCart}>
                  <CartIcon /> Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
      <ErrorPopup visible={!!errorMessage}>
        <CloseButton onClick={() => setErrorMessage('')}>Close</CloseButton>
        {errorMessage}
      </ErrorPopup>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

function getSelectedOptionsString(selectedOptions) {
  let resultString = "";
  for (const productId in selectedOptions) {
    const productOptions = selectedOptions[productId];
    for (const optionIndex in productOptions) {
      resultString += `${productOptions[optionIndex]}, `;
    }
    resultString = resultString.slice(0, -2);
    resultString += "; ";
  }
  resultString = resultString.slice(0, -2);
  return resultString;
}