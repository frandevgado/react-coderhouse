import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import appFirebase from './services/firestore.js'
import { CartProvider } from './context/CartContext'

import { testDatabase } from './services/firestore'

function App() {

  testDatabase()

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greet="Catalogo"/>}/>
          <Route path="/categoria/:categoryId" element={<ItemListContainer greet="Catalogo"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart/" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>  
    </CartProvider>  
  )
}

export default App;
