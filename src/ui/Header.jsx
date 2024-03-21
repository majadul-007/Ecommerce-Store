import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import Admin from '../features/AdminPanel/Admin';
import AdminPanel from '../features/AdminPanel/AdminPanel';
import '../assets/style.css'

function Header() {
  return (
    <header className="flex  text-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest text-center ">
        Pizza Ecommerce Store
      </Link>
     

      <SearchOrder />
      <Link to="/adminpanel" className="">
        <h2 className='a-panel'>


        Admin Panel
        </h2>
        </Link>


      
      <Username />
    </header>
  );
}

export default Header;
