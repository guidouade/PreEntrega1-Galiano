import { ProductCard } from "../common/ProductCard"

const ItemListContainer = ()=>{
    return <div>
        <h2>Nuestros libros</h2>
        <ProductCard titulo= {"Rebelión en la Granja"} foto= "https://images.cdn3.buscalibre.com/fit-in/360x360/36/12/3612339f9bf704aadacdd90b34723246.jpg" autor={"Escrito por George Orwell"} precio= {"$3000"} />
        <ProductCard titulo= {"El Tunel"} foto= "https://images.cdn2.buscalibre.com/fit-in/360x360/1b/89/1b894384b151e0fb96bc2f4636a82fd4.jpg" autor={"Escrito por Ernesto Sábato"} precio= {"$2500"}/>
        <ProductCard titulo= {"Puro Fútbol"} foto= "https://mascultura.mx/wp-content/uploads/2016/12/Puro-Futbol-Roberto-Fontanarrosa.jpg" autor={"Escrito por Roberto Fontanarrosa"} precio= {"$3500"}/>
    </div>
}

export default ItemListContainer