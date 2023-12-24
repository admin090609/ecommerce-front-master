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
`;

export default function ProductPage({ product }) {
  const router = useRouter();
  const { addProduct } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedOptions = localStorage.getItem('selectedOptions');
      console.log('Stored Options (Initial):', storedOptions);
      return storedOptions ? JSON.parse(storedOptions) : {};
    }
    return {};
  });

  const handleButtonClick = (optionIndex, individualOption) => {
    const newSelectedOptions = { ...selectedOptions };
    if (!newSelectedOptions[product._id]) {
      newSelectedOptions[product._id] = {};
    }
    newSelectedOptions[product._id][optionIndex] = individualOption;
    setSelectedOptions(newSelectedOptions);

    // Update localStorage only if running in the browser
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedOptions', JSON.stringify(newSelectedOptions));
    }
  };

  const addToCart = () => {
    console.log('Product added to cart:', product, selectedOptions);
    addProduct(product._id, selectedOptions, product);
    router.push({
      pathname: '/cart',
      query: {
        selectedOptions: JSON.stringify(selectedOptions),
      },
    });
  };

  useEffect(() => {
    console.log('Selected Options (Updated):', selectedOptions);
  }, [selectedOptions]);

  // Reset selectedOptions when the component is mounted
  useEffect(() => {
    setSelectedOptions({});
  }, []);



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
    }
  }
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
