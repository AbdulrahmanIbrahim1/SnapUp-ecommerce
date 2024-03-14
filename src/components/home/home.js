import { Container } from "react-bootstrap";
import Myslider from "../slider/slider";
import './home.css'
import { useDispatch, useSelector } from "react-redux";
// import { getAllCategories } from "../../store/categorySlice";
import { useEffect } from "react";
import { fetchProducts, getAllProducts, getAllProductsStats } from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../loader/loader";
import ProductList from "../productList/productList";
import { getAllCategories } from "../../store/categorySlice";


function Home() {
  const categories = useSelector(getAllCategories)
  const dispatch = useDispatch()
  // const categories = useSelector(getAllCategories)
  const productStatus = useSelector(getAllProductsStats)
  useEffect(() => {
    dispatch(fetchProducts(50))
  }, [dispatch])

  const products = useSelector(getAllProducts)
  // console.log("prod : ", products.products);

  // randomizing the products in the list
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);
      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }
  console.log("tempProducts : ", tempProducts);
  let catProductsOne = products.filter(product => product.category === categories[0]);
  let catProductsTwo = products.filter(product => product.category === categories[1]);
  let catProductsThree = products.filter(product => product.category === categories[2]);
  let catProductsFour = products.filter(product => product.category === categories[3]);

  return (<>
    <main>
      <Myslider />
      <div className="main-content">
        <Container >
          <div className="categories py-5">
            <div className="cat-item">
              <div className="main-title">
                <h3>see our products</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={tempProducts} />}
            </div>
            <div className='cat-item'>
              <div className='main-title'>
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsOne} />}
            </div>

            <div className='cat-item'>
              <div className='main-title'>
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsTwo} />}
            </div>

            <div className='cat-item'>
              <div className='main-title'>
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsThree} />}
            </div>

            <div className='cat-item'>
              <div className='main-title'>
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsFour} />}
            </div>
          </div>
        </Container>
      </div>
    </main>
  </>)
}
export default Home;