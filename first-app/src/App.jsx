import "./App.css"
import { Navbar } from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

const App = ()=>{

  return (
    <div className= "fondo">
      <Navbar />
      <ItemListContainer greeting="Hola, bienvenido/a nuestra librería virtual" />
    </div>
  );
};

export default App;
