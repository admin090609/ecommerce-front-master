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

export default function CartPage({ product }) {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState({});
  const { selectedOptions: selectedOptionsFromQuery } = router.query;

  useEffect(() => {
    // Parse and update selectedOptions state when the component mounts
    if (selectedOptionsFromQuery) {
      const parsedOptions = JSON.parse(selectedOptionsFromQuery);
      setSelectedOptions(parsedOptions);
    }
  }, [selectedOptionsFromQuery]);

  

  products.map(product => {
    // Check if product is not null or undefined before accessing _id
    if (product && product._id) {
      const productId = product._id; // Access the product ID
      const optionIndex = 0;

      // Now you can use the productId dynamically, for example, to access selectedOptions
      const selectedOption = selectedOptions[productId];
      // Use the selectedOption in your logic
      const optionValue = selectedOption?.[0]; // Accessing the value of the property with key '0'
    } else {
      console.warn("Invalid product:", product);
    }
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (cartProducts.length > 0) {
          const response = await axios.post('/api/cart', { ids: cartProducts });
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle the error as needed (e.g., show a user-friendly message)
      }
    };

    fetchProducts();
  }, [cartProducts]);


  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await axios.post('/api/checkout', {
      name, email, city, postalCode, streetAddress, country,
      cartProducts,
    });

    if (response.data.url) {
      // Use router.push to navigate to the payment page
      router.push(response.data.url);
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
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
            {!cartProducts?.length && (
              <div>Your cart is empty</div>
            )}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Options</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[...new Set(cartProducts)].map((productId, index) => {
                    const productDetails = products.find(p => p._id === productId);
                    const optionIndex = 1;
                    const selectedOption = selectedOptions[productId];

                    return (
                      <tr key={index}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={productDetails.images[0]} alt="" />
                          </ProductImageBox>
                          <div>
                            {productDetails.title}
                          </div>
                        </ProductInfoCell>
                        <td>
                          {/* Display selected options */}
                          {productDetails.options?.map((option, optionIndex) => (
                            <div key={optionIndex}>
                              {option.title}:{' '}
                              {selectedOption?.[optionIndex]}
                            </div>
                          ))}
                        </td>
                        <td>
                          <Button onClick={() => lessOfThisProduct(productDetails._id)}>-</Button>
                          <QuantityLabel>
                            {cartProducts.filter(id => id === productDetails._id).length}
                          </QuantityLabel>
                          <Button onClick={() => moreOfThisProduct(productDetails._id)}>+</Button>
                        </td>
                        <td>
                          ${cartProducts.filter(id => id === productDetails._id).length * productDetails.price}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
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
                onChange={ev => setName(ev.target.value)} />
              <Input type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={ev => setEmail(ev.target.value)} />
              <CityHolder>
                <Input type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={ev => setCity(ev.target.value)} />
                <Input type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={ev => setPostalCode(ev.target.value)} />
              </CityHolder>
              <Input type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={ev => setStreetAddress(ev.target.value)} />
              <Input type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={ev => setCountry(ev.target.value)} />
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