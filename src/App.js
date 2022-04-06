import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ProductContainer from './containers/ProductContainer';
import {Routes, Route, Link, Switch} from 'react-router-dom'
import Home from './pages/Home';
import CRUD from './pages/CRUD';
function App() {
  return (
        <div className="App">
          <Header></Header>
          
          <ul className='nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/crud'>Crud</Link></li>
          </ul>
          <Routes>
            <Route path='/' element={<ProductContainer/>}>
              
            </Route>
            <Route path='crud' element={<CRUD/>}>
              
            </Route>
          </Routes>
          
    </div>

  );
}

export default App;
