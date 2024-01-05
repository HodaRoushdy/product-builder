interface IProps{
msg:string
}
const ErrorMsg =({msg}:IProps)=>{
    return(
        <div>
            <span className="block text-red-700 font-semibold text-sm">{ msg}</span>
        </div>
    )
}
export default ErrorMsg