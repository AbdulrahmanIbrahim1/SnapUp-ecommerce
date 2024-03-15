import { Row } from "react-bootstrap";
import Product from "../product/product";



function ProductList({ allProducts,grid }) {
  return (<>
    
    <Row className="product-list py-5">
      {
        allProducts?.map((product) => {
          let discount = (product.price) - (product.price * (product.discountPercentage / 100))
          return (
            <Product key={product.id} product={{ ...product, discount }} grid={grid} />
          );
        })
      }
    </Row>
  </>)
}
export default ProductList