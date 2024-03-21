import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from '../user/userSlice';
import { useNavigate } from 'react-router-dom';

function Customer() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="mt-7 text-xl font-semibold">Create Customer</h2>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        {/* 👋 Welcome! Please start by telling us your name: */}
      </p>

      <input
        type="text"
        autoFocus
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />
      <br />

<input
        type="password"
        placeholder="abcd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input mb-8 w-72"
      />
      <br />

<input
        type="number"
        placeholder="age"
        
        // onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      <br />
      <input
        type="text"
        placeholder="Enter Email"
        
        className="input mb-8 w-72"
      />
      <br />

<input
        type="text"
        placeholder="Enter Address" 
        // value={}
        // onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

     
        <div>
          <Button type="primary">Create Customer</Button>
        </div>
      
    </form>
  );
}

export default Customer;
