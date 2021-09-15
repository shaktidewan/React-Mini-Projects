import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/cart' exact>
          <Cart />
        </Route>
        
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
