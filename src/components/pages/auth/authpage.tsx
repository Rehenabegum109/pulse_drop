// import { useState, type ChangeEvent, type FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import type { AuthForm } from "../../type";
// import api from "../../../api/axios";
// import { useAuth } from "./useAuth";


// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState<boolean>(true);

//   const navigate = useNavigate();


//   const { login } = useAuth();

//   const [form, setForm] = useState<AuthForm>({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {

//       // LOGIN
//       if (isLogin) {

//         const res = await api.post("/users/login", {
//           email: form.email,
//           password: form.password,
//         });

//         // ✅ context এ save
//         login(res.data.user, res.data.token);

//       } else {

//         // REGISTER
//         await api.post("/users/register", {
//           name: form.name,
//           email: form.email,
//           password: form.password,
//         });

//         const loginRes = await api.post("/users/login", {
//           email: form.email,
//           password: form.password,
//         });

//         login(loginRes.data.user, loginRes.data.token);
//       }

//       navigate("/");

//     } catch (error) {
//       console.error(error);
//       alert("Authentication failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[420px] bg-white p-6 rounded-xl shadow">

//         <h1 className="text-xl font-bold mb-4">
//           {isLogin ? "Login" : "Register"}
//         </h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">

//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={form.name}
//               onChange={handleChange}
//               className="border p-2 rounded"
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />

//           <button className="bg-red-500 text-white py-2 rounded">
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           {isLogin ? "No account?" : "Already have account?"}{" "}
//           <button
//             type="button"
//             className="text-blue-500"
//             onClick={() => setIsLogin((p) => !p)}
//           >
//             {isLogin ? "Register" : "Login"}
//           </button>
//         </p>

//       </div>
//     </div>
//   );
// }

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { AuthForm } from "../../type";
import { useAuth } from "./useAuth";
import api, { setToken } from "../../../api/axios";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState<AuthForm>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let res;

      // LOGIN
      if (isLogin) {
        res = await api.post("/users/login", {
          email: form.email,
          password: form.password,
        });
      } 
      // REGISTER
      else {
        await api.post("/users/register", {
          name: form.name,
          email: form.email,
          password: form.password,
        });

        res = await api.post("/users/login", {
          email: form.email,
          password: form.password,
        });
      }

      const { user, token } = res.data;

      // ✅ CONTEXT
      login(user, token);

      // ✅ AXIOS HEADER SET (NO LOCALSTORAGE)
      setToken(token);

      // redirect
      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Authentication failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[420px] bg-white p-6 rounded-xl shadow">

        <h1 className="text-xl font-bold mb-4">
          {isLogin ? "Login" : "Register"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <button className="bg-red-500 text-white py-2 rounded">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "No account?" : "Already have account?"}{" "}
          <button
            type="button"
            className="text-blue-500"
            onClick={() => setIsLogin((p) => !p)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
}