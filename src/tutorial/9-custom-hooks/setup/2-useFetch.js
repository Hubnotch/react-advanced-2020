import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    } catch(error) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, products };
};
