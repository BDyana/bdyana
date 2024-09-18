"use client";
import { getLatestProducts } from "@/actions/products/products.actions";
import { useCallback, useEffect, useState } from "react";
import Product from "./Product";

export default function NewProduct() {
  const [productsList, setProductsList] = useState([]);

  const getLatest = useCallback(async () => {
    const latestProducts = await getLatestProducts(12);
    setProductsList(latestProducts);
  });
  useEffect(() => {
    getLatest();
  }, []);

  return (
    <div className="pt-8 pb-4">
      <h2 className="text-xl">New Arrivals</h2>
      <h4>100+ products added today</h4>
      <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-3">
      {productsList.map((product) => (
        <div key={product.id}>
          <Product product={product}/>
        </div>
      ))}
        </div>
        </div>
  );
}
