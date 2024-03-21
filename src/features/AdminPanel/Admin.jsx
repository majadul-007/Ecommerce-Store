import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
// import MenuItem from '../menu/MenuItem';
import AdminPanel from './AdminPanel';

function Admin() {

  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
        <h1 className='text-center'>Available Products List</h1>
        <br />
      {menu.map((product) => (
        <AdminPanel product={product} key={product.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Admin;
