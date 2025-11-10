import { Outlet } from 'react-router-dom';
const Authlayout = () => {
  return <>
  <div className='authlayout'>
  <h1>Authlayout</h1>
    <Outlet />
  </div>
    
  </>
}
export default Authlayout;