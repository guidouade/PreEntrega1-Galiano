import CartWidget from "../common/CartWidget";
import "./Navbar.css"

export const Navbar = ()=>{

    return <div className= "fondo">
        <h1 className="nombre">Tinta Virtual</h1>
        <ul>
            <li>Todos</li>
            <li>Nacional</li>
            <li>Internacional</li>
        </ul>
        <h4>Carrito</h4>
        <CartWidget />
    </div>
}