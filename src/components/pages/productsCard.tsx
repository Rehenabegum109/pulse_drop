
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function ProductCard({ product }: any) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReserve = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await api.post(
        "/reservations",
        { productId: product.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // 👉 go to reservation page with ID only
      navigate(`/reservation/${res.data.id}`);
    } catch (err) {
      alert("Reservation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-4 rounded-xl shadow">
      <img src={product.image} className="h-40 w-full object-cover" />
      <h2 className="mt-2 font-bold">{product.title}</h2>

      <p>Stock: {product.stock}</p>

      <button
        onClick={handleReserve}
        disabled={loading || product.stock === 0}
        className="bg-black text-white px-4 py-2 mt-2 rounded"
      >
        {loading ? "Reserving..." : "Reserve"}
      </button>
    </div>
  );
}