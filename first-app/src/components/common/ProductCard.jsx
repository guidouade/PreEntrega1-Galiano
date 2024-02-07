
export const ProductCard = ( {titulo, foto, autor, precio} ) => {

  return (
    <div style= {{border: "2.5px solid black"}}>
        <h2 className= "nombre">{titulo}</h2>
        {foto && <img src={foto} style={{ maxWidth: "50%" }} />}
        <h3>{autor}</h3>
        <h4>{precio}</h4>
    </div>
  )
}
