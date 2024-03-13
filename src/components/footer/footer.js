import { Container } from 'react-bootstrap'
import './footer.css'
import { Link } from 'react-router-dom'
function Myfooter() {
  return (
    <>
      <footer >
        <Container className='d-flex flex-column'>
          <div className='cont d-flex justify-content-center align-items-center py-2'>
            <Link to={'/'} className='text-uppercase px-2'>privacy policy</Link>
            <div className='vert-line mx-2 px-2 '>|</div>
            <Link to={'/'} className='text-uppercase px-2'>term of service</Link>
            <div className='vert-line mx-2 px-2'>|</div>
            <Link to={'/'} className='text-uppercase px-2'>about SnapUp</Link>
          </div>
          <div className='copy-right py-2'>&copy; 2024 SnapUp. All Rights Reversed.</div>
        </Container>
      </footer>
    </>
  )
}

export default Myfooter