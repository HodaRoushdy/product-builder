import { ReactNode } from "react";

export interface IProducts {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IProductCard {
  product: IProducts;
}

export interface IModal {
  title?: string;
  closeModal: () => void;
  isOpen: boolean;
  children: ReactNode;
}

export interface IFormInput {
  label: string;
  id: string;
  name: "title" | "description" | "price" | "imageURL";
  type: string;
}

export interface IValidationProduct {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
