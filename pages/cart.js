import styled from "styled-components";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";
import axios from "axios";
import Table from "../components/Table";
import Input from "../components/Input";
import { Product } from "../models/Product";
import { useRouter } from 'next/router';
import mongoose from "mongoose";

const { ObjectId } = require('mongoose').Types;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;



export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [localCartProducts, setLocalCartProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState({});
  const { selectedOptions: selectedOptionsFromQuery } = router.query;
  const { existingImages: existingProductImages, newImages: newProductImages } = router.query;
  const existingImages = existingProductImages ? JSON.parse(existingProductImages) : [];
  const newImages = newProductImages ? JSON.parse(newProductImages) : [];


  useEffect(() => {
    // Parse and update selectedOptions state when the component mounts
    if (selectedOptionsFromQuery) {
      const parsedOptions = JSON.parse(selectedOptionsFromQuery);
      setSelectedOptions(parsedOptions);
    }
  }, [selectedOptionsFromQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Get unique product IDs from cartProducts
        const uniqueProductIds = [...new Set(cartProducts.map(item => item.productId))];

        if (uniqueProductIds.length > 0) {
          // Make a POST request to the server endpoint '/api/cart' with unique product IDs
          const response = await axios.post('/api/cart', { ids: uniqueProductIds });

          // Update the state with the fetched product data
          setProducts(response.data);
        } else {
          // If no unique product IDs are present, setProducts to an empty array
          setProducts([]);
        }
      } catch (error) {
        // Handle errors if any occur during the fetch
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchProducts function when the cartProducts array changes
    fetchProducts();
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success') && !isSuccess) {
      setIsSuccess(true);
    }
  }, [isSuccess]);



  async function goToPayment() {
    try {
      console.log(name, email, phone, cartProducts);
      const formattedCartProducts = cartProducts.map(productId => ({ productId }));
      console.log(formattedCartProducts);

      const response = await axios.post('/api/checkout', { name, email, phone, cartProducts: formattedCartProducts });

      // Check the response and perform any necessary actions
      console.log('Payment response:', response);
      clearCart();
      setIsSuccess(true);
      return response;

      // Redirect the user or handle success accordingly
      // For example, you might redirect to a success page:
    } catch (error) {
      console.error('Error in /api/checkout:', error);

      // Handle the error locally, you might show an error message to the user
      // You can update the state to show an error message in the UI, for example
      // setErrorState(true);
    }
  }


  if (isSuccess) {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
          <img src="/images/order.png" className="w-40 mb-4" />
          <h1 className="text-xl">Vă mulțumim pentru comandă!</h1>
          <p className="text-xl">Așteptați apelul din partea administrației.</p>
          <Button className="bg-[#453CF7] text-white font-medium p-3 rounded-md mx-auto flex justify-center mt-4 hover:bg-[#3730b9]" onClick={() => router.push('/')} /* Adjust the route as needed */>
            Continuă cumpărăturile
          </Button>
        </div>
      </>
    );
  }

  console.log(cartProducts)



  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center">
          {!cartProducts.length &&
            <div className="flex flex-col justify-center items-center">
              <img src="/images/empty-cart.png" className="w-80" />
              <div className="text-xl">Cartul dvs. este gol.</div>
            </div>
          }
        </div>
            <div className="flex md:flex-row flex-col max-w-screen-2xl gap-8 md:p-10 p-2 justify-center md:items-start items-center">
          {cartProducts?.length > 0 && (
            <Table className="flex flex-col justify-center items-center">
              <div className="shadow-md mb-4 border border-[#cccc] rounded-md md:w-[100%] w-[170%] p-4">
                <h2 className="font-bold sm:text-start text-center text-2xl text-black ml-0 sm:ml-6">CARTUL DVS.</h2>
              </div>
              <div className="flex justify-center flex-col items-center md:w-[100%]">
                {cartProducts.map((cartItem, index) => {
                  const productDetails = cartItem.productDetails;
                  return (
                    <div key={index} className="flex md:flex-row flex-col justify-center items-center md:gap-8 gap-4 shadow-md md:mb-2 mb-6 p-6 border border-[#cccc] rounded-md w-[170%] md:w-full">
                      <div className="w-40 border-[#ccc] border-2 rounded-md  overflow-hidden object-contain ">
                        <img src={productDetails.images[0]} alt={productDetails.title} />
                      </div>
                      <div>
                        <h1 className="text-[#6F6F6F] sm:text-2xl text-sm ">
                          {productDetails.title}
                        </h1>
                        <div>
                          {Object.entries(cartItem.options).map(([optionKey, optionValue]) => (
                            <div key={optionKey} className="flex flex-col">
                              {Array.isArray(optionValue)
                                ? optionValue.map((value, index) => (
                                  <div key={index} className="flex flex-col" style={{ whiteSpace: 'pre-line' }}>
                                    {Object.values(value).join('\n')}
                                  </div>
                                ))
                                : <div className="flex flex-col" style={{ whiteSpace: 'pre-line' }}>{Object.values(optionValue).join('\n')}</div>
                              }
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="gap-4 flex">
                        <button className="bg-[#453CF7] hover:bg-[#3730b9] duration-200 ease-in-out text-white px-2 rounded-[50%] w-8 h-8 text-xl" onClick={() => removeProduct(cartItem.productId, cartItem.options)}>-</button>
                        <QuantityLabel className="text-2xl">{cartItem.quantity}</QuantityLabel>
                        <button className="bg-[#453CF7] hover:bg-[#3730b9] duration-200 ease-in-out text-white px-2 rounded-[50%] w-8 h-8 text-xl" onClick={() => addProduct(cartItem.productId, cartItem.options)}>+</button>
                      </div>
                      <div className="w-40 border-[#ccc] border-2 rounded-md  overflow-hidden object-contain ">
                        {cartItem.images.map((image, index) => (
                          <div key={index}>
                            <img src={image} alt={`Product Image ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Table>
          )}
          <div className="md:w-[170%] w-[130%]">
            {!!cartProducts?.length && (
              <div className="flex flex-col md:items-start items-center justify-center">
                <h2 className="text-xl">Datele dvs.</h2>
                <Input type="text"
                  placeholder="Nume..."
                  value={name}
                  name="name"
                  onChange={(ev) => setName(ev.target.value)} />
                <Input type="text"
                  placeholder="Email..."
                  value={email}
                  name="email"
                  onChange={(ev) => setEmail(ev.target.value)} />
                <Input type="text"
                  placeholder="Nr. de telefon..."
                  value={phone}
                  name="number"
                  onChange={(ev) => setPhone(ev.target.value)} />
                <Button
                  onClick={goToPayment}
                  className=" w-[130%] flex justify-center duration-200 ease-in-out mb-20 text-white bg-[#453CF7] cursor-pointer hover:bg-[#3730b9] py-2 rounded-md"
                >
                  Comandă
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongoose.connect("mongodb+srv://two2tek:Pass2023@cluster0.deqdqov.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const id = context.params;
  const objectId = new ObjectId(id);
  const product = await Product.findOne({ _id: objectId });

  console.log("id from context:", id);
  console.log("product", product);

  const cartProducts = context.req.cookies.cartProducts || [];

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      cartProducts: cartProducts,
    },
  };
} 