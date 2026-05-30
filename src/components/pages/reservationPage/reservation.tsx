
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../../../api/axios";


// export default function ReservationPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [reservation, setReservation] = useState<any>(null);
//   const [timeLeft, setTimeLeft] = useState(0);

//   // fetch reservation
//   useEffect(() => {
//     api.get(`/reservations/${id}`).then((res) => {
//       setReservation(res.data);
//     });
//   }, [id]);

//   // timer
//   useEffect(() => {
//     if (!reservation) return;

//     const interval = setInterval(() => {
//       const diff =
//         new Date(reservation.expiresAt).getTime() - new Date().getTime();

//       setTimeLeft(diff);

//       if (diff <= 0) {
//         clearInterval(interval);
//         setTimeLeft(0);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [reservation]);

//   // checkout
//   const handleBuy = async () => {
//     const token = localStorage.getItem("token");

//     await api.post(
//       "/reservations/checkout",
//       { reservationId: id },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     alert("BUY SUCCESS 🎉");
//     navigate("/drops");
//   };

//   if (!reservation) return <p>Loading...</p>;

//   const expired = timeLeft <= 0;

//   return (
//     <div className="p-10">
//       <img
//         src={reservation.product.image}
//         className="h-60 object-cover rounded"
//       />

//       <h1 className="text-2xl font-bold mt-3">
//         {reservation.product.title}
//       </h1>

//       {/* TIMER */}
//       <div className="text-red-500 text-xl mt-3">
//         {expired
//           ? "EXPIRED"
//           : `${Math.floor(timeLeft / 1000)} seconds left`}
//       </div>

//       {/* BUY BUTTON */}
//       <button
//         onClick={handleBuy}
//         disabled={expired}
//         className={`px-6 py-2 mt-4 rounded text-white ${
//           expired ? "bg-gray-400" : "bg-green-600"
//         }`}
//       >
//         BUY NOW
//       </button>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/axios";

export default function ReservationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reservation, setReservation] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    api.get(`/reservations/${id}`).then((res) => {
      setReservation(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (!reservation) return;

    const interval = setInterval(() => {
      const diff =
        new Date(reservation.expiresAt).getTime() - new Date().getTime();

      setTimeLeft(diff);

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [reservation]);

  const handleBuy = async () => {
    const token = localStorage.getItem("token");

    await api.post(
      "/reservations/checkout",
      { reservationId: id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    alert("BUY SUCCESS 🎉");
    navigate("/drops");
  };

  if (!reservation) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  const expired = timeLeft <= 0;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-[#141414] rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* IMAGE SECTION */}
        <div className="relative">
          <img
            src={reservation.product.image}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* CONTENT SECTION */}
        <div className="p-8 flex flex-col justify-center gap-5">

          <h1 className="text-3xl font-bold tracking-wide">
            {reservation.product.title}
          </h1>

          {/* TIMER CARD */}
          <div className="bg-black/40 border border-gray-700 rounded-xl p-4">
            <p className="text-sm text-gray-400">Reservation Timer</p>

            <p className={`text-2xl font-bold mt-1 ${
              expired ? "text-red-500" : "text-green-400"
            }`}>
              {expired
                ? "EXPIRED"
                : `${Math.floor(timeLeft / 1000)} sec left`}
            </p>
          </div>

          {/* STATUS */}
          <div>
            {expired ? (
              <p className="text-red-500 font-semibold">
                Reservation expired. Stock released.
              </p>
            ) : (
              <p className="text-green-400">
                Your item is locked for 5 minutes.
              </p>
            )}
          </div>

          {/* BUY BUTTON */}
          <button
            onClick={handleBuy}
            disabled={expired}
            className={`py-3 rounded-xl font-semibold transition ${
              expired
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            BUY NOW
          </button>

        </div>
      </div>
    </div>
  );
}