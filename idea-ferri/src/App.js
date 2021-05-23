import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer'
import Home from './components/Home'
import CartProvider from './context/cartContext'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <CartProvider>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/ItemListContainer" component={ItemListContainer}/>
            <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer}/>
            <Route exact path="/Cart" component={Cart}/>
          </CartProvider>
        </Switch>
     </BrowserRouter>
  );
}

export default App;