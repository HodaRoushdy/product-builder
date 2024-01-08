import { ICategories } from './../interfaces/index';
import { v4 as uuid } from "uuid";
import {IFormInput, IProducts } from "../interfaces";

export const ProductsList: IProducts[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas doloribus numquam id dignissimos cumque magni, molestias itaque natus voluptatum",
    imageURL:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$5,000",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    category: {
      name: "Porsche",
      imgURL:
        "https://images.pexels.com/photos/18412480/pexels-photo-18412480/free-photo-of-taycan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Pe...",                                  
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas doloribus numquam id dignissimos cumque magni, molestias itaque natus voluptatum",
    imageURL:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$120,000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "BMW",
      imgURL:
        "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: uuid(),
    title: "buick skylark 320",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas doloribus numquam id dignissimos cumque magni, molestias itaque natus voluptatum",
    imageURL:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$200,000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Chevrolet",
      imgURL:
        " https://images.pexels.com/photos/583153/pexels-photo-583153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: uuid(),
    title: "plymouth satellite",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas doloribus numquam id dignissimos cumque magni, molestias itaque natus voluptatum",
    imageURL:
      "https://images.unsplash.com/photo-1534096331554-af5d8b510bbf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$350,000",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    category: {
      name: "Porsche",
      imgURL:
        "https://images.unsplash.com/photo-1534096331554-af5d8b510bbf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "amc rebel sst",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas doloribus numquam id dignissimos cumque magni, molestias itaque natus voluptatum",
    imageURL:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$20,000",
    colors: ["rgb(220 38 38)", "rgb(79 70 229)", "rgb(202 138 4)"],
    category: {
      name: "Cars",
      imgURL:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "ford torino",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas doloribus numquam id dignissimos cumque magni, molestias itaque natus voluptatum",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$250,000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      imgURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

export const FormInput: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Name",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "url",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const Colors: string[] = [
  "#FF3333",
  "#337AFF",
  "#4233FF",
  "#1C2833",
  "#F7DC6F",
  "#17202A",
  "#808B96",
];

export const categories:ICategories[] = [
  {
    id: uuid(),
    name: "Bmw",
    imgURL:
      "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uuid(),
    name: "Porsche ",
    imgURL:
      "https://images.pexels.com/photos/18412480/pexels-photo-18412480/free-photo-of-taycan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uuid(),
    name: "Chevrolet",
    imgURL:
      " https://images.pexels.com/photos/583153/pexels-photo-583153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uuid(),
    name: "Ferrari",
    imgURL:
      "https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
