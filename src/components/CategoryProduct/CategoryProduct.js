import { useDispatch, useSelector } from "react-redux"
// import Loader from "../loader/loader"
import { fetchProductOfCateory, grtAllProductCat } from "../../store/categorySlice"
// import {  getAllProducts } from "../../store/productSlice"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductList from "../productList/productList"
import { Container } from "react-bootstrap"
import Loader from "../loader/loader"

function CategoryProduct() {
  const { cat } = useParams()
  const dispatch = useDispatch()
  // const categories = useSelector(getAllCategories)
  const productsCat = useSelector(grtAllProductCat)
  useEffect(() => {
    dispatch(fetchProductOfCateory(cat))
  }, [dispatch, cat])
  // console.log("productsCat : ", productsCat.products);
  // console.log(cat);
  const [grid, setgrid] = useState(true)
  return (
    <>
      <Container>
        <div className="display my-2">
          <button className="btn bg-orange text-white mx-3" onClick={() => setgrid(true)}>
            <i className="fa-solid fa-grip-vertical fs-4 p-2"></i>
          </button>
          <button className="btn bg-orange text-white mx-3" onClick={() => setgrid(false)}>
            <i className="fa-solid fa-grip-lines fs-4 p-2"></i>
          </button>
        </div>

        <div className="main-title my-4">
          <h3>see our {cat}</h3>
        </div>

        {!productsCat ? (
          <Loader /> // لسه محملش
        ) : productsCat.products?.length === 0 ? (
          <div className="text-center py-5">
            <h4>لا توجد منتجات، تأكد من اتصال الإنترنت</h4>
          </div>
        ) : (
          <ProductList allProducts={productsCat.products} grid={grid} />
        )}
      </Container>


      {/* <Loader /> */}
    </>
  )
}
export default CategoryProduct