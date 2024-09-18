"use client";
import { getLatestProducts } from "@/actions/products/products.actions";
import Paginate from "@/components/frontend/Filter/Paginate";
import Product from "@/components/frontend/Product";
import { useCallback, useEffect, useState } from "react";

export default async function AllProducts({
    productCount,
    isSearch,
}) {
  const [productsList, setProductsList] = useState([]);
  const getLatest = useCallback(async () => {
    const latestProducts = await getLatestProducts(30);
    setProductsList(latestProducts);
  });
  useEffect(() => {
    getLatest();
  }, []);
  const pageSize = 10;
  const totalPages = Math.ceil(productCount / pageSize);

  return (
    <div className="pt-8 pb-4">
        <h2 className="text-xl">All Products</h2>
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-4">
                {productsList.map((product) => (
                    <div key={product.id}>
                    <Product product={product}/>
                    </div>
                ))}
            </div>
            <div className="p-8 mx-auto flex items-center justify-center w-full">
                <Paginate totalPages={totalPages} isSearch={isSearch} />
            </div>
        </div>
    </div>
  );
}
