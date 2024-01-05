import Button from "../Button";
import { txtSlicer } from "../Utils";

import Image from "../Image";
import { IProductCard } from "../interfaces";

const Product = ({ product }: IProductCard) => {


  const { title, imageURL, description, price, category } = product;
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
      <div className="flex items-center space-x-2 my-3">
        <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer" />
      </div>

      <div className="flex justify-between">
        <span className="text-lg text-indigo-600 font-semibold">{price}</span>
        <Image
          url={category.imageURL}
          alt={category.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between space-x-2 mt-3">
        <Button className="bg-indigo-700 hover:bg-indigo-800">EDIT</Button>
        <Button className="bg-red-700 hover:bg-red-800">DELETE</Button>
      </div>
    </div>
  );
};
export default Product;
