import { Container } from "react-bootstrap";
import Myslider from "../slider/slider";
import './home.css'
import { useDispatch, useSelector } from "react-redux";
// import { getAllCategories } from "../../store/categorySlice";
import { useEffect, useState } from "react";
import { fetchProducts, getAllProducts, getAllProductsStats } from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../loader/loader";
import ProductList from "../productList/productList";
import { getAllCategories } from "../../store/categorySlice";


function Home() {
  const categories = useSelector(getAllCategories)

  // ===========================tstsscategories =========================

  
  
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

  console.log("############################".repeat(50));
  console.log("final categories test test ");
  console.log("Categories test test is ",typeof (products[0]) );
  console.log("Categories test test is ", products[0] );
  

  const [grid, setgrid] = useState(true)
  return (<>
    <main>
      <Myslider />

      <div className="main-content">
        <Container >
          <div className="display my-2">
            <button className="btn  bg-orange text-white  mx-3 " onClick={() => setgrid(true)} >
              <i className="fa-solid fa-grip-vertical fs-4 p-2"></i>
            </button>
            <button className="btn bg-orange text-white mx-3" onClick={()=>setgrid(false)} >
              <i className="fa-solid fa-grip-lines fs-4 p-2" ></i>
            </button>
          </div>
          <div className="categories py-5">
            <div className="cat-item">
              <div className="main-title">
                <h3>see our products</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={tempProducts} grid={grid} />}
            </div>
            <div className='cat-item'>
              <div className='main-title'>
                {/* <h3>{categories[0]}</h3> */}
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsOne} grid={grid} />}
            </div>

            <div className='cat-item'>
              <div className='main-title'>
                {/* <h3>{categories[1]}</h3> */}
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsTwo} grid={grid} />}
            </div>

            <div className='cat-item'>
              <div className='main-title'>
                {/* <h3>{categories[2]}</h3> */}
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsThree} grid={grid} />}
            </div>

            <div className='cat-item'>
              <div className='main-title'>
                {/* <h3>{categories[3]}</h3> */}
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={catProductsFour} grid={grid} />}
            </div>
          </div>
        </Container>
      </div>
    </main>
  </>)
}
export default Home;