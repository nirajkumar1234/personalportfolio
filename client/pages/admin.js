import { useState } from 'react';
import axios from 'axios'
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/user/adminlogin', {
      email: email,
      password: password
    })
      .then((data) => {
        console.log(data.data)
        if (data.data.code == 1) {
          localStorage.setItem("admindata", data.data._id);
          window.location.href = './adminpage/Adminpage';
        }
        else {
          alert("Invalid Credentials")
        }
      })
      .catch((data) => {
        alert("Something went wrong");
      })
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };



  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8 p-6 border border-gray-700 rounded-lg shadow-lg" style={{ marginTop: "7%" }}>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Sign In</h2>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
          required
          className="appearance-none border bg-gray-900 border-gray-800 rounded w-full py-2 px-4 text-white leading-tight focus:outline-gray-900 focus:shadow-outline"
        />
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
          required
          className="appearance-none border bg-gray-900  border-gray-800 rounded w-full py-2 px-4 text-white leading-tight focus:outline-gray-900 focus:shadow-outline"
        />
        <button
          type="button"
          className="hover:bg-transparent absolute top-0 right-0 mr-4 mt-9 text-sm font-bold text-gray-600 focus:outline-none"
          onClick={handleShowPasswordToggle}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <div className="flex items-center justify-between mb-6">
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-600 border border-gray-200 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </div>
    </form >
  );
};

export default LoginForm;
