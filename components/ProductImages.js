import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
    width: 100%;
    height: 100%;
  `;
const BigImage = styled.img`
  height: 350px;
  width: 500px;
`;
const ImageButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 25%;
  `;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: black;
    ` : `
      border-color: #ccc;
    `}
    height: 80px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = styled.div`
  text-align: center;
  margin-left: 20px;
  width: 75%;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <div className="flex">
        <ImageButtons>
          {images.map(image => (
            <ImageButton
              className={`border-2 rounded-lg mb-3 hover:border-black hover:bg-slate-50 cursor-pointer duration-300 ease-in-out}`}
              key={image}
              active={image === activeImage}
              onClick={() => setActiveImage(image)}>
              <Image className="object-contain" src={image} alt="" />
            </ImageButton>
          ))}
        </ImageButtons>
        <BigImageWrapper className="border-2 rounded-lg overflow-hidden">
          <BigImage src={activeImage} className="object-contain " />
        </BigImageWrapper>
      </div>
    </>
  );
}