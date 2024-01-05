import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

import Button from "./components/Button";
import CircleColor from "./components/CircleColor";
import { Colors, FormInput, ProductsList } from "./components/Data";
import ErrorMsg from "./components/ErrorMessage";
import Input from "./components/Input";
import MyModal from "./components/Modal";
import { IProducts } from "./components/interfaces";
import ProductCard from "./components/productCard";
import { ProductValidation } from "./components/validation";

const defaultProduct: IProducts = {
  id: "",
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  category: {
    name: "",
    imageURL: "",
  },
};

function App() {
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProducts>(defaultProduct);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({ ...product, [name]: value });

    setErrors({
      ...errors,
      [name]: "",
    });
  };


  const renderFormInputs = FormInput.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = ProductValidation({
      title,
      description,
      imageURL,
      price,
    });
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
    }
    console.log("add this product to products list ");
    closeModal();
  }

  const onCancelHandler = (): void => {
    setProduct(defaultProduct);
    closeModal();
  };

    const renderProducts = ProductsList.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  const renderColors = Colors.map((color) => (
    
        <CircleColor color={color} />
        
  ));

  return (
    <main className="container p-5">
      <Button
        className="bg-indigo-700 hover:bg-indigo-800 m  b-4 mb-4"
        width="w-fit"
        onClick={openModal}>
        Add
      </Button>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {renderProducts}
      </div>

      <MyModal
        title="Add a New Product"
        closeModal={closeModal}
        isOpen={isOpen}>
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputs}
          <div className="flex items-center space-x-2 my-3">{renderColors}</div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancelHandler}>
              Cancel
            </Button>
          </div>
        </form>
      </MyModal>
    </main>
  );
}

export default App;
