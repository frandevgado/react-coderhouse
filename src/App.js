import NavBar from './components/NavBar/NavBar.jsx';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return (<>
        <NavBar/>
        {/* <ItemListContainer greet="An Item"/> */}
        <ItemDetailContainer/>
        </>
  )
}

export default App;
