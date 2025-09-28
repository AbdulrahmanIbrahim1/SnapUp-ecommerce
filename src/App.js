// import './App.css';

// import { Routes, Route, Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/header'
import Sidebar from './components/sidebar/sidebar';
import store from './store/store';
import { Provider } from 'react-redux';
import Home from './components/home/home';
import ProductSingle from './components/productSingle/productSingle';
import CategoryProduct from './components/CategoryProduct/CategoryProduct';
// import Cart from './components/Cart/Cart';
import Loader from './components/loader/loader';
import Search from './components/Search/Search';
import Myfooter from './components/footer/footer';
import CartPage from './components/cartPage/cartPage';
import ErrorBoundary from './ErrorBoundary';



function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Provider store={store}>
          {/* <div style={{ textAlign: "center", color: "red" }}>The site is under modification </div>
          <Loader /> */}
          <Header />
          <Sidebar />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/products/:id' element={<ProductSingle />} />
            <Route path='/category/:cat' element={<CategoryProduct />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/search/:searchTerm' element={<Search />} />
          </Routes>
          <Myfooter />
        </Provider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
