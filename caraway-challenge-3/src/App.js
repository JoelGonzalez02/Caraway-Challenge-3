import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(3, 300px)",
  gridGap: "25px",
  justifyContent: "center",
  marginTop: "40px",
}));

function App() {
  const [products, setProducts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [apparel, setApparel] = useState([]);
  const [underwear, setUnderwear] = useState([]);
  const [socks, setSocks] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");
  const shoesList = [];
  // const apparelList = [];
  // const socksList = [];
  // const underwearList = [];
  // const accessoriesList = [];

  useEffect(() => {
    function fetchData() {
      axios
        .get("https://www.allbirds.com/products.json?limit=150")
        .then((res) => {
          setProducts(res.data.products);
        })
        .catch((err) => {
          setServerError(err);
        });
    }
    fetchData();
  }, [shoesList]);

  return (
    <Container>
      {products
        ? products
            .slice(0, 12)
            .map((product, index) => (
              <div key={index}>
                {product.product_type === "Shoes" && (
                  <Card
                    imageSrc={product.images[0].src}
                    title={product.title}
                  />
                )}
              </div>
            ))
        : null}
    </Container>
  );
}

export default App;
