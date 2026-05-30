export type FilterType = "all" | "live" | "upcoming" | "sold";

export type Product = {
  id: string;
  title: string;
  image: string;
  stock: number;
  createdAt?: string;
};

export interface AuthForm {
  name?: string;
  email: string;
  password: string;
};


export type Reservation = {
  id: string;
  productId: string;
  userId: string;
  status: "ACTIVE" | "EXPIRED" | "COMPLETED";
  expiresAt: string;
  product: {
    id: string;
    title: string;
    image: string;
  };
};