import "./App.css"
import { Navbar } from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

const App = ()=>{

  return (
    <div className= "fondo">
      <Navbar />
        <ItemListContainer />
    </div>
  )
}

export default App
