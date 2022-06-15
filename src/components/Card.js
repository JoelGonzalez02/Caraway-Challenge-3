import React from "react";
import styled from "@emotion/styled";
import ProductsModal from "./Modal";

const Container = styled.div(() => ({}));

const StyledCard = styled.div(() => ({
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  transition: "200ms ease-in",
  width: "300px",
  height: "470px",
  backgroundColor: "white",
  border: "0.5px solid black",
  borderBottomLeftRadius: "0px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "25px",
  borderTopLeftRadius: "25px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  ":hover": {
    transform: "scale(1.02)",
    boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
    border: "none",
  },
}));

const TextBody = styled.div(() => ({
  width: "100%",
  padding: "20px",
}));

const ProductTitle = styled.p(() => ({
  fontWeight: "bold",
}));

const ModalTitle = styled.p(() => ({
  fontWeight: "bold",
  marginLeft: "15px",
  marginTop: "15px",
}));

const ProductStyles = styled.p(() => ({
  fontStyle: "italic",
  marginTop: "10px",
}));

const ProductPrice = styled.p(() => ({
  marginTop: "10px",
  fontSize: "18px",
}));

const ImageContainer = styled.div(() => ({
  width: "100%",
}));

const BackgroundImage = styled.img(() => ({
  width: "100%",
  backgroundColor: "#f1f0ef",
  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  ":hover": {
    boxShadow: "rgba(3, 102, 214, 0.3) 0px 25px 20px -20px",
  },
}));

const ModalImage = styled.img(() => ({
  width: "420px",
  borderRadius: "15px",
  marginLeft: "20px",
  marginTop: "20px",
  backgroundColor: "#f1f0ef",
  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  ":hover": {
    boxShadow: "rgba(3, 102, 214, 0.3) 0px 25px 20px -20px",
  },
}));

const VariantImage = styled.img(() => ({
  width: "65px",
  height: "65px",
  backgroundColor: "#f1f0ef",
  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  marginTop: "10px",
  marginLeft: "15px",
}));

const NewIconContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "10px",
  marginRight: "5px",
}));

const NewIcon = styled.div(({ newItem }) => ({
  width: "80px",
  height: "30px",
  borderRadius: "25px",
  background: "green",
  background:
    "linear-gradient(to right, #f1f0ef, #6DD5FA, rgba(3, 102, 214, 0.3))",
  display: newItem ? "flex" : "none",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
}));

const NewIconText = styled.h3(() => ({
  color: "white",
  textShadow: "1px 0.5px black",
}));

function Card({
  imageSrc,
  title,
  styles,
  variant,
  price,
  newItem,
  otherStyles,
}) {
  return (
    <Container>
      <ProductsModal>
        <ModalImage src={imageSrc}></ModalImage>
        <ModalTitle>{title}</ModalTitle>
        <VariantImage src={otherStyles}></VariantImage>
      </ProductsModal>
      <StyledCard>
        <ImageContainer>
          <BackgroundImage
            src={imageSrc}
            onMouseOver={(e) => (e.currentTarget.src = variant)}
            onMouseLeave={(e) => (e.currentTarget.src = imageSrc)}
          />
          <NewIconContainer>
            <NewIcon newItem={newItem}>
              <NewIconText>New</NewIconText>
            </NewIcon>
          </NewIconContainer>

          <TextBody>
            <ProductTitle>{title.slice(0, 61)}</ProductTitle>
            <ProductStyles>{styles} styles available </ProductStyles>
            <ProductPrice>${price}</ProductPrice>
          </TextBody>
        </ImageContainer>
      </StyledCard>
    </Container>
  );
}

export default Card;
