
import { useEffect, useState } from "react";
import api from "../../api/axios";
import ProductCard from "./productsCard";


export default function DropPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 p-6">
      {products.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}