import React, { useState } from 'react';
import Card from './components/card';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: '', price: '', description: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        
        if (products.length >= 3) return alert('You can only add up to 3 products.');
        const { name, price, description } = form;

        if (!name || !description || isNaN(price)) return alert('Please enter valid data.');

        setProducts([...products, { name, price: parseInt(price), description }]);
        setForm({ name: '', price: '', description: '' });
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                <button type="submit">Add</button>
            </form>

            <div>
                {products.map((product, index) => (
                    <Card key={index} name={product.name} price={product.price} description={product.description} />
                ))}
            </div>
        </div>
    );
};

// function App() {
//   const [ageState, setAgeState] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = () => {
//     const numericState = parseInt(ageState, 10);
//     if (isNaN(numericState)) {
//       setMessage("Input nomor yang valid.");
//     } else if (numericState >= 18) {
//       setMessage("Selamat datang!");
//     } else {
//       setMessage("Kamu belum cukup umur");
//     }
//   };

//   return (
//     <div>
//       <h1>useState</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             age input: 
//             <input
//               type="number"
//               value={ageState}
//               onChange={(e) => setAgeState(e.target.value)}
//             />
//           </label>
//         </div>
//         <button type="submit">Check</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

export default App