import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useRouter } from 'next/router';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img{
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

const BoxImg = styled.div`
  width: 150px
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

  function moreOfThisProduct(id) {
    addProduct(id); // Call the addProduct function when the user wants more of this product
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }


  let total = 0;

  cartProducts.forEach(cartItem => {
    const productDetails = products.find(p => p._id === cartItem.productId);
    if (productDetails) {
      total += cartItem.quantity * productDetails.price; // Assuming cartItem has a 'quantity' property
    }
  });


  async function goToPayment() {
    try {
      console.log(name, email, phone, cartProducts);
      const formattedCartProducts = cartProducts.map(productId => ({ productId }));

      const response = await axios.post('/api/checkout', { name, email, phone, cartProducts: formattedCartProducts });

      // Check the response and perform any necessary actions
      console.log('Payment response:', response);
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
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }



  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts.length && <div>Your cart is empty</div>}

            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Options</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartItem, index) => {
                    const productDetails = products.find(p => p._id === cartItem.productId);
                    if (!productDetails) return null;

                    return (
                      <tr key={index}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={productDetails.images[0]} alt={productDetails.title} />
                          </ProductImageBox>
                          <div>
                            {productDetails.title}
                          </div>
                        </ProductInfoCell>
                        <td>
                          {Object.entries(cartItem.options).map(([optionKey, optionValue]) => (
                            <div key={optionKey}>
                              {Array.isArray(optionValue)
                                ? optionValue.map((value, index) => (
                                  <div key={index}>{Object.values(value).join(' ')}</div>
                                ))
                                : <div>{Object.values(optionValue).join(' ')}</div>
                              }
                            </div>
                          ))}
                        </td>


                        <td>
                          <Button onClick={() => removeProduct(cartItem.productId, cartItem.options)}>-</Button>
                          <QuantityLabel>{cartItem.quantity}</QuantityLabel>
                          <Button onClick={() => addProduct(cartItem.productId, cartItem.options)}>+</Button>
                        </td>
                        <td>
                          <BoxImg>
                            {newImages.map((newImages, index) => (
                              <div key={index}>
                                <ProductImageBox>
                                  <img src={newImages} alt={`New Image ${index + 1}`} />
                                </ProductImageBox>
                              </div>
                            ))}
                          </BoxImg>
                        </td>
                        <td>${cartItem.quantity * productDetails.price}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={4}>Total</td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <Input type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)} />
              <Input type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)} />
              <Input type="text"
                placeholder="Number"
                value={phone}
                name="number"
                onChange={(ev) => setPhone(ev.target.value)} />
              <Button black block
                onClick={goToPayment}>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);

  // Use context.req.cookies.cartProducts directly
  const cartProducts = context.req.cookies.cartProducts || [];

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      cartProducts: cartProducts,
    },
  };
}
