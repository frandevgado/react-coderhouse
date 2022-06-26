import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (<div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greet="Catalogo"/>}/>
          <Route path="/categoria/:categoryId" element={<ItemListContainer greet="Catalogo"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart/" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>  
        </div>
  )
}

export default App;
