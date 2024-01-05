


import { IValidationProduct } from "../interfaces";

export const ProductValidation = (product: IValidationProduct) => {
  const errors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  const urlTemplet = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
    

  if (
    !product.title.trim() ||
    product.title.length > 80 ||
    product.title.length < 10
  ) {
    errors.title = "product title must be between 10 and 80";
    console.log(errors);
  }

  if (
    !product.description.trim() ||
    product.description.length > 500 ||
    product.description.length < 10
  ) {
    errors.description = "product description must be between 10 and 300";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "please enter a valid price";
  }


  if (!product.imageURL.trim() || !urlTemplet) {
    errors.imageURL = "valid image url is required";
  }
  return errors;
};
