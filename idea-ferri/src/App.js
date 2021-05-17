import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/ItemListContainer" component={ItemListContainer}/>
          <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer}/>
        </Switch>
     </BrowserRouter>
  );
}

export default App;