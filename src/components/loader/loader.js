import { Container } from "react-bootstrap"
import { loader } from "../../utils/images"

function Loader() {
  return (
    <>
      <Container >
        <div className="Loader d-flex justify-content-center">
          <img src={loader} style={{ height: "50px" }} alt="" />
        </div>
      </Container>
    </>
  )
}
export default Loader