import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import styled from "@emotion/styled";
import Loader from "react-spinner-loader";

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

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loader, setLoader] = useState(true);
  const [showMoreShoes, setShowMoreShoes] = useState(false);
  const [showMoreApparel, setShowMoreApparel] = useState(false);
  const [showMoreSocks, setShowMoreSocks] = useState(false);
  const [showMoreUnderwear, setShowMoreUnderwear] = useState(false);
  const [showMoreAccessories, setShowMoreAccessories] = useState(false);

  const today = new Date();
  today.setDate(today.getDate() - 3);
  const date = new Date(today).toLocaleDateString("de").slice(0, 2);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    function fetchData() {
      axios
        .get("https://www.allbirds.com/products.json?limit=150")
        .then((res) => {
          if (res.status === "error") {
            setError(res.data);
          } else {
            setProducts(res.data.products);
          }
        })
        .catch((err) => {
          setServerError(err);
        });
    }
    fetchData();
  }, []);

  const shoesList = products.filter((product) => {
    return product.product_type === "Shoes";
  });

  const apparelList = products.filter((product) => {
    return product.product_type === "Apparel";
  });

  const socksList = products.filter((product) => {
    return product.product_type === "Socks";
  });

  const underwearList = products.filter((product) => {
    return product.product_type === "Underwear";
  });

  const accessoriesList = products.filter((product) => {
    return product.product_type === "Accessories";
  });

  const handleShowMore = (prodType) => {
    if (prodType === "Shoes") {
      setShowMoreShoes(!showMoreShoes);
    } else if (prodType === "Apparel") {
      setShowMoreApparel(!showMoreApparel);
    } else if (prodType === "Socks") {
      setShowMoreSocks(!showMoreSocks);
    } else if (prodType === "Underwear") {
      setShowMoreUnderwear(!showMoreUnderwear);
    } else {
      setShowMoreAccessories(!showMoreAccessories);
    }
  };
  const checkIfNewItem = (prod) => {
    return prod.slice(8, 10) - 3 <= date ? true : false;
  };

  return (
    <>
      {!loader ? (
        <>
          <TextContainer>
            <TextHeader>Shoes</TextHeader>
          </TextContainer>
          <Container>
            {shoesList && !showMoreShoes
              ? shoesList
                  .slice(0, 12)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Shoes" && (
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
              : shoesList
                  .slice(0, 20)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Shoes" && (
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
            {shoesList.length > 12 && (
              <ViewMoreButton onClick={() => handleShowMore("Shoes")}>
                {!showMoreShoes ? "View More" : "View Less"}
              </ViewMoreButton>
            )}
          </ButtonContainer>
          <TextContainer>
            <TextHeader>Apparel</TextHeader>
          </TextContainer>
          <Container>
            {apparelList && !showMoreApparel
              ? apparelList
                  .slice(0, 12)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Apparel" && (
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
              : apparelList
                  .slice(0, 20)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Apparel" && (
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
            {apparelList.length > 12 && (
              <ViewMoreButton onClick={() => handleShowMore("Apparel")}>
                {!showMoreApparel ? "View More" : "View Less"}
              </ViewMoreButton>
            )}
          </ButtonContainer>
          <TextContainer>
            <TextHeader>Socks</TextHeader>
          </TextContainer>
          <Container>
            {socksList && !showMoreSocks
              ? socksList
                  .slice(0, 12)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Socks" && (
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
              : socksList
                  .slice(0, 20)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Socks" && (
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
            {socksList.length > 12 && (
              <ViewMoreButton onClick={() => handleShowMore("Socks")}>
                {!showMoreSocks ? "View More" : "View Less"}
              </ViewMoreButton>
            )}
          </ButtonContainer>
          <TextContainer>
            <TextHeader>Underwear</TextHeader>
          </TextContainer>
          <Container>
            {underwearList && !showMoreUnderwear
              ? underwearList
                  .slice(0, 12)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Underwear" && (
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
              : underwearList
                  .slice(0, 20)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Underwear" && (
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
            {underwearList.length > 12 && (
              <ViewMoreButton onClick={() => handleShowMore("Underwear")}>
                {!showMoreUnderwear ? "View More" : "View Less"}
              </ViewMoreButton>
            )}
          </ButtonContainer>
          <TextContainer>
            <TextHeader>Accessories</TextHeader>
          </TextContainer>
          <Container>
            {accessoriesList && !showMoreAccessories
              ? accessoriesList
                  .slice(0, 12)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Accessories" && (
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
              : accessoriesList
                  .slice(0, 20)
                  .map((product, index) => (
                    <div key={index}>
                      {product.product_type === "Accessories" && (
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
            {accessoriesList.length > 12 && (
              <ViewMoreButton onClick={() => handleShowMore("Accessories")}>
                {!showMoreAccessories ? "View More" : "View Less"}
              </ViewMoreButton>
            )}
          </ButtonContainer>
        </>
      ) : (
        <Loader show={loader} type="body" />
      )}
    </>
  );
}

export default App;
