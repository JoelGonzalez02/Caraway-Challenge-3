import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";

const Container = styled.div(() => ({
  width: "100vw",
  display: "grid",
  gridTemplateColumns: "repeat(3, 300px)",
  gridGap: "25px",
  justifyContent: "center",
  marginTop: "20px",
}));

const TextContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
}));

const TextHeader = styled.h1(() => ({
  borderBottom: "0.5px dotted black",
  borderTop: "0.5px dotted black",
}));

const ButtonContainer = styled.div(() => ({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
}));

const ViewMoreButton = styled.button(() => ({
  width: "120px",
  height: "40px",
  backgroundColor: "#f1f0ef",
  borderBottomLeftRadius: "0px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "15px",
  marginTop: "20px",
  cursor: "pointer",
  fontSize: "17px",
  ":hover": {
    backgroundColor: "rgba(3, 102, 214, 0.3)",
  },
}));

function ProductListContainer({
  title,
  productList,
  showMoreProducts,
  handleShowMore,
}) {
  const today = new Date();
  today.setDate(today.getDate() - 3);
  const month = new Date(today).toLocaleDateString("de").slice(3, 4);
  const date = new Date(today).toLocaleDateString("de").slice(0, 2);

  const checkIfNewItem = (prod) => {
    return prod.slice(6, 7) === month && date <= prod.slice(8, 10)
      ? true
      : false;
  };

  return (
    <>
      <TextContainer>
        <TextHeader>{title}</TextHeader>
      </TextContainer>
      <Container>
        {!showMoreProducts
          ? productList
              .slice(0, 12)
              .map((product, index) => (
                <div key={index}>
                  {product.product_type === title && (
                    <Card
                      imageSrc={product.images[0].src}
                      title={product.title}
                      styles={product.variants.length}
                      variant={product.images[1].src}
                      price={product.variants[0].price}
                      newItem={checkIfNewItem(product.published_at)}
                      otherStyles={product.images.map((img) => img.src)}
                    />
                  )}
                </div>
              ))
          : productList
              .slice(0, 21)
              .map((product, index) => (
                <div key={index}>
                  {product.product_type === title && (
                    <Card
                      imageSrc={product.images[0].src}
                      title={product.title}
                      styles={product.variants.length}
                      variant={product.images[1].src}
                      price={product.variants[0].price}
                      newItem={checkIfNewItem(product.published_at)}
                      otherStyles={product.images.map((img) => img.src)}
                    />
                  )}
                </div>
              ))}
      </Container>
      <ButtonContainer>
        {productList.length > 12 && (
          <ViewMoreButton onClick={handleShowMore}>
            {!showMoreProducts ? "View More" : "View Less"}
          </ViewMoreButton>
        )}
      </ButtonContainer>
    </>
  );
}

export default ProductListContainer;
