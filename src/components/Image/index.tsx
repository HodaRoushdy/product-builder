import { memo } from "react"

interface IProps{
url:string ,
alt:string,
className:string
}
const Image =({url,alt,className}:IProps)=>{
    return(
        <img className={className} src={url} alt={alt} />
    )
}
export default memo(Image);