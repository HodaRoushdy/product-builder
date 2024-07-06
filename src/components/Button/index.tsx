import { ButtonHTMLAttributes, ReactNode, memo } from "react"

type widthType = "w-full" | "w-fit"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode;
className?:string;
width?:widthType;

}
const Button =({children,className,width="w-full",...rest}:IProps)=>{
    return(
        <button className={`${className} ${width} rounded-md p-2 text-white cursor-pointer duration-200 font-light`} {...rest} >{children}</button>
    )
}
export default memo(Button);