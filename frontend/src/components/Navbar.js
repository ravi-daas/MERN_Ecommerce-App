import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [query, setQuery] = useState('');
    const [login, setLoggedIn] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search Query:', query);

        // Add logic to perform search or navigate to search results page
    };

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        setLoggedIn(isLoggedIn != null);
    })

    return <>
        <ul className="p-5 rounded cursor-pointer flex flex-wrap justify-around items-center h-20 bg-gradient-to-r from-purple-500 to-pink-500">
            <Link to='/'>
                <h2 className="text-green-900 text-2xl font-bold relative -top-0.5">Shopkart</h2>
            </Link>
            <li className="group relative">
                <span>Category</span>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg w-[29rem] p-4">
                    <p className='text-xl font-bold'>Popular Categories</p>
                    <hr className='border-spacing-2 border-green-500 w-4/4 mx-auto my-4 rounded-lg'></hr>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex w-52 bg-gray-400 rounded'>
                            <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png' className='m-1' alt=''></img>
                            <div className='flex flex-col  pl-2'>
                                <span className='text-lg font-semibold'>Furniture</span>
                                <span className='text-neutral-600'>240 Items</span>
                            </div>
                        </div>
                        <div className='flex w-52 bg-gray-400 rounded'>
                            <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png' className='m-1' alt=''></img>
                            <div className='flex flex-col  pl-2'>
                                <span className='text-lg font-semibold'>Hand Bag</span>
                                <span className='text-neutral-600'>240 Items</span>
                            </div>
                        </div>
                        <div className='flex w-52 bg-gray-400 rounded'>
                            <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png' className='m-1' alt=''></img>
                            <div className='flex flex-col  pl-2'>
                                <span className='text-lg font-semibold'>Shoe</span>
                                <span className='text-neutral-600'>240 Items</span>
                            </div>
                        </div>
                        <div className='flex w-52 bg-gray-400 rounded'>
                            <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png' className='m-1' alt=''></img>
                            <div className='flex flex-col  pl-2'>
                                <span className='text-lg font-semibold'>Headphone</span>
                                <span className='text-neutral-600'>240 Items</span>
                            </div>
                        </div>
                        <div className='flex w-52 bg-gray-400 rounded'>
                            <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png' className='m-1' alt=''></img>
                            <div className='flex flex-col  pl-2'>
                                <span className='text-lg font-semibold'>Laptop</span>
                                <span className='text-neutral-600'>240 Items</span>
                            </div>
                        </div>
                        <div className='flex w-52 bg-gray-400 rounded'>
                            <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png' className='m-1' alt=''></img>
                            <div className='flex flex-col  pl-2'>
                                <span className='text-lg font-semibold'>Book</span>
                                <span className='text-neutral-600'>240 Items</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <a href='#deals'>Deals</a>
            <form onSubmit={handleSearch} className="flex items-center">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="p-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
                <button
                    type="submit"
                    className="bg-white text-blue-500 px-4 py-2 rounded-r-md hover:bg-gray-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
            {login ?
                <Link to='/account'>
                    <div className="flex">
                        <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png' className='' alt='' />
                        <li className="pl-2">Account</li>
                    </div>
                </Link>
                : <Link to='/login'>
                    <div className="flex">
                        <img src='https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png' className='' alt='' />
                        <li className="pl-2">Login</li>
                    </div>
                </Link>
            }
            <div className="text-center">
                <Link to="/products">
                    <button className="p-2 bg-blue-500 text-white rounded">Explore More Products</button>
                </Link>
            </div>
        </ul>
    </>;
}

export default Navbar;