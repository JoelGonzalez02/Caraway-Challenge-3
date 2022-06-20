import "./App.css";
import React, { useState, useEffect } from "react";
import Loader from "react-spinner-loader";
import ProductListContainer from "./components/ProductListContainer";
import { GetProducts } from "./api/GetProducts";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  const [showMoreShoes, setShowMoreShoes] = useState(false);
  const [showMoreApparel, setShowMoreApparel] = useState(false);
  const [showMoreSocks, setShowMoreSocks] = useState(false);
  const [showMoreUnderwear, setShowMoreUnderwear] = useState(false);
  const [showMoreAccessories, setShowMoreAccessories] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    async function fetchData() {
      const products = await GetProducts();
      try {
        setProducts(products);
      } catch (err) {
        setError(err);
      }
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

  return (
    <>
      {!loader ? (
        <>
          <ProductListContainer
            title="Shoes"
            productList={shoesList}
            showMoreProducts={showMoreShoes}
            handleShowMore={() => handleShowMore("Shoes")}
          />
          <ProductListContainer
            title="Apparel"
            productList={apparelList}
            showMoreProducts={showMoreApparel}
            handleShowMore={() => handleShowMore("Apparel")}
          />
          <ProductListContainer
            title="Socks"
            productList={socksList}
            showMoreProducts={showMoreSocks}
            handleShowMore={() => handleShowMore("Socks")}
          />
          <ProductListContainer
            title="Underwear"
            productList={underwearList}
            showMoreProducts={showMoreUnderwear}
            handleShowMore={() => handleShowMore("Underwear")}
          />
          <ProductListContainer
            title="Accessories"
            productList={accessoriesList}
            showMoreProducts={showMoreAccessories}
            handleShowMore={() => handleShowMore("Accessories")}
          />
        </>
      ) : (
        <Loader show={loader} type="body" />
      )}
    </>
  );
}

export default App;
