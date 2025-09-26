import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearSearch, fetchAsyncSearch, getSearchProducts } from "../../store/searchSlice";
import { getAllProductsStats } from "../../store/productSlice";
import { Container } from "react-bootstrap";
import { STATUS } from "../../utils/status";
import Loader from "../loader/loader";
import ProductList from "../productList/productList";

function Search() {
  const { searchTerm } = useParams()  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearSearch())
    dispatch(fetchAsyncSearch(searchTerm))
  }, [dispatch, searchTerm])
  const searchProducts = useSelector(getSearchProducts)
  const searchProductsStatus = useSelector(getAllProductsStats)

  const [grid, setgrid] = useState(true)

  if (searchProducts.length === 0) {
    return (
      <Container style={{ minHeight: '70vh' }}>
        <h2 className="text-center my-4 py-4">No Products Found.</h2>
      </Container>
    )
  }
  return (<>
    <Container>
      <div className="display my-4">
        <button className="btn  bg-orange text-white  mx-3 " onClick={() => setgrid(true)} >
          <i className="fa-solid fa-grip-vertical fs-4 p-2"></i>
        </button>
        <button className="btn bg-orange text-white mx-3" onClick={() => setgrid(false)} >
          <i className="fa-solid fa-grip-lines fs-4 p-2" ></i>
        </button>
      </div>
      <div className="cat-item">
        <div className="main-title">
          <h3>Search for : {searchTerm}</h3>
        </div>
        {searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts={searchProducts} grid={grid} />}
      </div>
    </Container>
  </>)
}
export default Search;