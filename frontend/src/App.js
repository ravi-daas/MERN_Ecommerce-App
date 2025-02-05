// function App() {
//   return (
//     <div className="App">
//       <header>
//         <h1 className='text-color:red'>Welcome to My React App, Thanks for Visit</h1>
//       </header>
//       <main>
//         {/* Add components or main content */}
//         <p>Start building your app here!</p>
//       </main>
//       <footer>
//         <p>© 2024 My React App</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//         setData(data); // Set the fetched data to the state
//       } catch (error) {
//         console.log(error);

//         setError(error); // Set error if fetching fails
//       } finally {
//         setLoading(false); // Set loading to false after the fetch completes
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this will run once when the component mounts

//   return (
//     <div className="App">
//       <header>
//         <h1 className='text-color' style={{ color: 'red' }}>
//           Welcome to My React App, Thanks for Visit
//         </h1>
//       </header>

//       <main>
//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p>Error: {error.message}</p>
//         ) : (
//           <div>
//             <p>Start building your app here!</p>
//             <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display fetched data */}
//           </div>
//         )}
//       </main>

//       <footer>
//         <p>© 2024 My React App</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Allproducts from './pages/admin/allProduct';
import AccountPage from './pages/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account" element={<AccountPage />} />
          {/* Admin Routes */}
          <Route path="/admin/products" element={<Allproducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
