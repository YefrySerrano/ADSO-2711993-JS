export default function Boton({clickHandle, name}){
    
    const handleCLick = () => clickHandle (name);
    return(
    <div>
        <button onClick={handleCLick}>{name}</button>
    </div>
    )
}