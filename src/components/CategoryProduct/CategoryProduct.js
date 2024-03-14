import { useDispatch, useSelector } from "react-redux"
// import Loader from "../loader/loader"
import { fetchProductOfCateory, grtAllProductCat } from "../../store/categorySlice"
// import {  getAllProducts } from "../../store/productSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductList from "../productList/productList"
import { Container } from "react-bootstrap"

function CategoryProduct() {
  const { cat } = useParams()
  const dispatch = useDispatch()
  // const categories = useSelector(getAllCategories)
  const productsCat = useSelector(grtAllProductCat)
  useEffect(() => {
    dispatch(fetchProductOfCateory(cat))
  }, [dispatch, cat])
  // console.log("productsCat : ", productsCat.products);
  console.log(cat);
  return (
    <>
      <Container >
        <div className="main-title my-4">
          <h3>see our {cat}</h3>
        </div>
        <ProductList allProducts={productsCat.products} />
      </Container>
      {/* <Loader /> */}
    </>
  )
}
export default CategoryProduct