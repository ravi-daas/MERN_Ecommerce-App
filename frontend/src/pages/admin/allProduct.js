import { IoAddOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import AddProductModal from '../../components/AddProductModal';

// function Navbar() {

function Allproducts() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search Query:', query);
        // Add logic to perform search or navigate to search results page
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleSaveProduct = (product) => {
        console.log("Saved Product:", product);
        // Add logic to save the product to the database
    };


    useEffect(() => {
        document.title = "Admin Page"
    }, []);

    return <>
        <div className="p-8">
            <div className="flex flex-row justify-between items-center cursor-pointer">
                <Link to='/'>
                    <span className="text-3xl">Shopkart</span>
                </Link>
                <span className="text-2xl">
                    All Products
                </span>
                <Link to='/admin/orders'>
                    <span className="text-xl p-2 border-2 rounded-lg bg-slate-500 flex items-center text-white">
                        Orders Page
                    </span>
                </Link>
                <span onClick={handleOpenModal} className="p-2 border-2 rounded-lg bg-slate-500 flex items-center text-white">
                    <IoAddOutline />
                    <span className="pl-1">
                        Add Product
                    </span>
                </span>
            </div>
            <AddProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveProduct}
            />
            {/* {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl mb-4">Add Product</h2>
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="block border p-2 rounded mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Category"
                                className="block border p-2 rounded mb-2 w-full"
                            />
                            <input
                                type="number"
                                placeholder="Inventory"
                                className="block border p-2 rounded mb-2 w-full"
                            />
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )} */}

            <hr className="my-2"></hr>
            <div className="mt-2">
                <form onSubmit={handleSearch} className="flex items-center border-2 w-min rounded-lg bg-gray-700 text-white">
                    <input
                        type="text"
                        placeholder="Search Products"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="p-2 rounded-l-md focus:outline-none focus:ring-blue-300 bg-gray-700"
                    />
                    <button
                        type="submit"
                        className="bg-gray-700 text-blue-500 px-4 py-2 rounded-r-md hover:bg-gray-600 "
                    >
                        <IoSearchOutline />
                    </button>
                </form>

            </div>
            <div className=" mt-2 rounded-lg">
                <div className="flex bg-slate-400 p-1 rounded-lg py-2">
                    <div className="flex-1">Product Image</div>
                    <div className="flex-1">Product Name</div>
                    <div className="flex-1">Category</div>
                    <div className="flex-1">Price</div>
                    <div className="flex-1">Brand</div>
                    <div className="flex-1">Actions</div>
                </div>
                <div className="flex py-2 rounded-lg h-full px-1 items-center">
                    <div className="flex-1 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                        <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)] w-20 h-20" />
                    </div>
                    <div className="flex-1">Laptop</div>
                    <div className="flex-1">
                        <span className="px-2 py-1 border-2 bg-slate-800 w-min rounded-lg text-white">
                            Tech
                        </span>
                    </div>

                    <div className="flex-1">30</div>
                    <div className="flex-1">Apple</div>
                    <div className="flex-1 flex justify-start items-center text-xl cursor-pointer">
                        <span className="flex-1">
                            <MdOutlineModeEdit />
                        </span>
                        <span className="flex-1">
                            <MdDeleteForever />
                        </span>
                    </div>
                </div>
                <hr className="border-slate-500 rounded-lg border-1 my-1"></hr>
                <div className="flex py-2 rounded-lg h-full px-1 items-center">
                    <div className="flex-1 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                        <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)] w-20 h-20" />
                    </div>
                    <div className="flex-1">Laptop</div>
                    <div className="flex-1">
                        <span className="px-2 py-1 border-2 bg-slate-800 w-min rounded-lg text-white">
                            Tech
                        </span>
                    </div>

                    <div className="flex-1">30</div>
                    <div className="flex-1">Apple</div>
                    <div className="flex-1 flex justify-start items-center text-xl cursor-pointer">
                        <span className="flex-1">
                            <MdOutlineModeEdit />
                        </span>
                        <span className="flex-1">
                            <MdDeleteForever />
                        </span>
                    </div>
                </div>
                <hr className="border-slate-500 rounded-lg border-1 my-1"></hr>
            </div>
        </div>
    </>;
}

export default Allproducts;