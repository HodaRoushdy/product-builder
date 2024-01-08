import Button from "../Button";
import { txtSlicer } from "../Utils";

import Image from "../Image";
import { IProducts } from "../interfaces";
import CircleColor from "../CircleColor";

import { useState } from "react";

interface Iprops {
  product: IProducts;
  openEditModal: () => void;
  setProductToEdit: (product: IProducts) => void;
  idx: number;
  setproductToEditIdx:(value:number)=>void
}

const Product = ({ product, openEditModal ,setProductToEdit,idx ,setproductToEditIdx}: Iprops) => {
  const [tempColors, setTempColor] = useState<string[]>([]);
  const { title, imageURL, description, price, category, colors } = product;
  const renderColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  function onEdit(): void {
    setProductToEdit(product);
    openEditModal()
    setproductToEditIdx(idx)
  }



  return (
    <div className="max-w-sm md:max-w-md mx-auto md:mx-0 rounded-md border border-gray-200 p-3 flex flex-col space-y-3">
      <Image
        alt="car product"
        className="rounded-md h-52 w-full lg:object-cover items-center"
        url={imageURL}
      />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center space-x-1 my-3">{renderColors}</div>

      <div className="flex justify-between">
        <span className="text-lg text-indigo-600 font-semibold">{price}</span>
        <Image
          url={category.imgURL}
          alt={category.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between space-x-2 mt-3">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          EDIT
        </Button>
        <Button className="bg-red-700 hover:bg-red-800">DELETE</Button>
      </div>
    </div>
  );
};
export default Product;
