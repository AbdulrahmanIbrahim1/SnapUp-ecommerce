import { useDispatch, useSelector } from 'react-redux';
import './sidebar.css'
import { getSidebarStatus, setSidebarOff } from '../../store/sidebarSlice';
import { Link } from 'react-router-dom';
import { fetchAsyncCategories, getAllCategories } from '../../store/categorySlice';
import { useEffect } from 'react';

function Sidebar() {
  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAsyncCategories())
  }, [dispatch])
  const isSidebarOn = useSelector(getSidebarStatus)
  // const isSidebarOn = false
  // console.log("isSidebarOn is : ", isSidebarOn);

  return (
    <>

      <aside className={isSidebarOn ? "my-aside " : 'my-aside hide-aside'}>
        <div className='lay' onClick={() => {
          dispatch(setSidebarOff())
        }}></div>
        <div className='aside-cont '>
          <div className='to-head d-flex justify-content-between'>
            <h3>All Gategories </h3>
            <button onClick={() => {
              dispatch(setSidebarOff())
            }}>❌</button>
          </div>
          <ul className='list-group list-group-flush'>
            {
              categories.map((cat, id) => {
                return (
                  <li className='list-group-item text-capitalize  ' onClick={() => dispatch(setSidebarOff())} key={id}>
                    <Link to={`category/${cat}`} className='cat-lis-link text-decoration-none balck-text'>{cat.replace("-", " ")}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar;