// import {

//   createContext,
//   useState,
//   ReactNode,
// } from "react";

// type UserType = {
//   id: string;
//   name: string;
//   email: string;
// };

// type AuthType = {
//   user: UserType | null;
//   token: string | null;
//   login: (userData: UserType, token: string) => void;
//   logout: () => void;
// };

// export const AuthContext = createContext<AuthType | null>(null);

// type Props = {
//   children: ReactNode;
// };

// export const AuthProvider = ({ children }: Props) => {
//   const [user, setUser] = useState<UserType | null>(null);
//   const [token, setToken] = useState<string | null>(null);

//   const login = (userData: UserType, jwt: string) => {
//     setUser(userData);
//     setToken(jwt);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         token,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


import {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";

type UserType = {
  id: string;
  name: string;
  email: string;
};

type AuthType = {
  user: UserType | null;
  token: string | null;
  login: (userData: UserType, token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthType | null>(null);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (userData: UserType, jwt: string) => {
    setUser(userData);
    setToken(jwt);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return ctx;
};