// import React, { useState } from "react";

// function AddProductModal({ isOpen, onClose, onSave }) {
//     if (!isOpen) return null;

//     const [product, setProduct] = useState({
//         name: "",
//         category: "",
//         inventory: "",
//         status: "",
//         brand: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleSave = () => {
//         onSave(product);
//         onClose();
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Product</h2>
//                 <form className="space-y-4">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Product Name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="category"
//                         placeholder="Category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="number"
//                         name="inventory"
//                         placeholder="Inventory"
//                         value={product.inventory}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="status"
//                         placeholder="Status"
//                         value={product.status}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="brand"
//                         placeholder="Brand"
//                         value={product.brand}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </form>
//                 <div className="flex justify-end mt-4 space-x-2">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleSave}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddProductModal;


// import React, { useState } from "react";

// function AddProductModal({ isOpen, onClose, onSave }) {
//     const [product, setProduct] = useState({
//         name: "",
//         category: "",
//         inventory: "",
//         status: "",
//         brand: "",
//     });

//     if (!isOpen) return null; // Conditional rendering here is fine.

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleSave = () => {
//         onSave(product);
//         onClose();
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Product</h2>
//                 <form className="space-y-4">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Product Name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="category"
//                         placeholder="Category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="number"
//                         name="inventory"
//                         placeholder="Inventory"
//                         value={product.inventory}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="status"
//                         placeholder="Status"
//                         value={product.status}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="brand"
//                         placeholder="Brand"
//                         value={product.brand}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </form>
//                 <div className="flex justify-end mt-4 space-x-2">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleSave}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddProductModal;


// import React, { useState, useEffect } from "react";

// function AddProductModal({ isOpen, onClose, onSave }) {
//     const initialProductState = {
//         name: "",
//         category: "",
//         price: "",
//         image: "",
//         brand: "",
//     };

//     const [product, setProduct] = useState(initialProductState);

//     useEffect(() => {
//         if (isOpen) {
//             setProduct(initialProductState); // Reset state when modal is opened
//         }
//     }, [isOpen]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleSave = () => {
//         onSave(product);
//         onClose(); // Close the modal after saving
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Product</h2>
//                 <form className="space-y-4">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Product Name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="category"
//                         placeholder="Category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="number"
//                         name="price"
//                         placeholder="Price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="image"
//                         placeholder="Image Link"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="brand"
//                         placeholder="Brand"
//                         value={product.brand}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </form>
//                 <div className="flex justify-end mt-4 space-x-2">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleSave}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddProductModal;


import React, { useState, useEffect } from "react";

function AddProductModal({ isOpen, onClose, onSave }) {
    const initialProductState = {
        name: "",
        category: "",
        image: "",
        price: "",
        brand: "",
    };

    const [product, setProduct] = useState(initialProductState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isOpen) {
            setProduct(initialProductState); // Reset state when modal is opened
            setErrors({}); // Clear previous errors
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!product.name.trim()) newErrors.name = "Product name is required.";
        if (!product.category.trim()) newErrors.category = "Category is required.";
        if (!product.image.trim() || isNaN(product.image))
            newErrors.image = "Image Link is required.";
        if (!product.price.trim()) newErrors.price = "Price is required.";
        if (!product.price.trim() < 1) newErrors.price = "Price can't be 0 or -ve";
        if (!product.brand.trim()) newErrors.brand = "Brand is required.";
        return newErrors;
    };

    const handleSave = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        onSave(product);
        onClose(); // Close the modal after saving
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Product</h2>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={product.category}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>
                    <div>
                        <input
                            type="number"
                            name="image"
                            placeholder="Image"
                            value={product.image}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm">{errors.image}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="brand"
                            placeholder="Brand"
                            value={product.brand}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.brand && <p className="text-red-500 text-sm">{errors.brand}</p>}
                    </div>
                </form>
                <div className="flex justify-end mt-4 space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;
