import "./App.css";
import React, { useState, useEffect } from "react";
import Loader from "react-spinner-loader";
import ProductListContainer from "./components/ProductListContainer";
import { GetProducts } from "./api/GetProducts";

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

  const productTypes = [
    { title: "Shoes", list: shoesList, showMore: showMoreShoes },
    { title: "Apparel", list: apparelList, showMore: showMoreApparel },
    { title: "Socks", list: socksList, showMore: showMoreSocks },
    { title: "Underwear", list: underwearList, showMore: showMoreUnderwear },
    {
      title: "Accessories",
      list: accessoriesList,
      showMore: showMoreAccessories,
    },
  ];

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
          {productTypes.map((prod, idx) => (
            <div key={idx}>
              <ProductListContainer
                title={prod.title}
                productList={prod.list}
                showMoreProducts={prod.showMore}
                handleShowMore={() => handleShowMore(prod.title)}
              />
            </div>
          ))}
        </>
      ) : (
        <Loader show={loader} type="body" />
      )}
    </>
  );
}

export default App;
