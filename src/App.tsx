import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Button from "./components/Button";
import CircleColor from "./components/CircleColor";
import { Colors, FormInput, ProductsList, categories } from "./components/Data";
import ErrorMsg from "./components/ErrorMessage";
import Input from "./components/Input";
import MyModal from "./components/Modal";
import SelectMenu from "./components/SelectMenu";
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
    imgURL: "",
  },
};

function App() {
  const [productToEditIdx, setproductToEditIdx] = useState(0);

  const [productToEdit, setProductToEdit] = useState<IProducts>(defaultProduct);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  const [products, setProducts] = useState<IProducts[]>(ProductsList);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeEditModal = () => setIsOpenEditModal(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
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

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const [tempColors, setTempColor] = useState<string[]>([]);

  const renderColors = Colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

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
    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColor([]);
    closeEditModal();
  }

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;
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
    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {...productToEdit,colors: tempColors.concat(productToEdit.colors)}
    setProducts(updatedProducts);

    setProductToEdit(defaultProduct);
    setTempColor([]);
    closeEditModal();
  };

  const onCancelHandler = (): void => {
    setProduct(defaultProduct);
    closeModal();
  };

  const renderProducts = products.map((product, idx) => (
    <ProductCard
      idx={idx}
      key={product.id}
      product={product}
      openEditModal={openEditModal}
      setProductToEdit={setProductToEdit}
      setproductToEditIdx={setproductToEditIdx}
    />
  ));

  return (
    <main className="container p-5">
      <Button
        className="bg-indigo-700 hover:bg-indigo-800 mb-4"
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
          <SelectMenu
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center space-x-2 my-3">{renderColors}</div>
          <div className="flex items-center flex-wrap space-x-2 my-3">
            {tempColors.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="mr-1 p-1 mb-1 rounded-md  ">
                {color}
              </span>
            ))}
          </div>

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

      <MyModal
        title="Edit Product"
        closeModal={closeEditModal}
        isOpen={isOpenEditModal}>
        <form className="space-y-3" onSubmit={submitEditHandler}>
          <div className="flex flex-col" key={"title"}>
            <label
              htmlFor={"title"}
              className="mb-[2px] text-sm font-medium text-gray-700">
              {"product title"}
            </label>
            <Input
              type={"text"}
              id={"title"}
              name={"title"}
              value={productToEdit["title"]}
              onChange={onChangeEditHandler}
            />
            <ErrorMsg msg={""} />
          </div>

          <div className="flex flex-col" key={"description"}>
            <label
              htmlFor={"description"}
              className="mb-[2px] text-sm font-medium text-gray-700">
              {"product description"}
            </label>
            <Input
              type={"text"}
              id={"description"}
              name={"description"}
              value={productToEdit["description"]}
              onChange={onChangeEditHandler}
            />
            <ErrorMsg msg={""} />
          </div>

          <SelectMenu
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center space-x-2 my-3">{renderColors}</div>
          <div className="flex items-center flex-wrap space-x-2 my-3">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="mr-1 p-1 mb-1 rounded-md  ">
                {color}
              </span>
            ))}
          </div>

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
