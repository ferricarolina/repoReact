import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer'
import Home from './containers/Home'
import CartProvider from './context/cartContext'
import ImageProvider from './context/imagesContext'
import Cart from './components/Cart'
import BuyForm from './components/BuyForm'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <ImageProvider>
        <NavBar/>
        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/ItemListContainer" component={ItemListContainer}/>
            <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer}/>
            <Route exact path="/Cart" component={Cart}/>
            <Route exact path="/BuyForm" component={BuyForm}/>
        </Switch>
      </ImageProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;