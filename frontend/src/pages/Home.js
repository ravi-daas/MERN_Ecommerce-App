import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Home() {
    return <>
        <Navbar />
        <img src="home.png" alt="" />
        <div className="mx-20 mb-10 mt-20 font-bold text-3xl">Shop Our Top Categories</div>
        <div className="flex justify-between mx-20 flex-wrap gap-5">
            <div className="rounded-xl w-52 h-64 bg-cover bg-[url('https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png')]">
                <p className="text-center pt-4 font-bold text-2xl text-slate-100">Furniture</p>
            </div>
            <div className="rounded-xl w-52 h-64 bg-cover bg-[url('https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png')]">
                <p className="text-center pt-4 font-bold text-2xl text-slate-100">Hand Bag</p>
            </div>
            <div className="rounded-xl w-52 h-64 bg-cover bg-[url('https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png')]">
                <p className="text-center pt-4 font-bold text-2xl text-slate-100">Books</p>
            </div>
            <div className="rounded-xl w-52 h-64 bg-cover bg-[url('https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png')]">
                <p className="text-center pt-4 font-bold text-2xl text-slate-100">Tech</p>
            </div>
            <div className="rounded-xl w-52 h-64 bg-cover bg-[url('https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png')]">
                <p className="text-center pt-4 font-bold text-2xl text-slate-100">Sneakers</p>
            </div>
            <div className="rounded-xl w-52 h-64 bg-cover bg-[url('https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png')]">
                <p className="text-center pt-4 font-bold text-2xl text-slate-100">Travels</p>
            </div>
        </div>
        <div id="deals" className="mx-20 mb-10 mt-20 font-bold text-3xl">Todays Best Deals for you!</div>
        <div className="overflow-x-auto pb-5 mx-20">
            <div className="flex flex-row justify-between flex-wrap gap-5 min-w-max cursor-pointer">
                <div className="border-2 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)]" />
                    <div className="flex justify-between px-1 text-lg font-semibold">
                        <p>HomePod Mini</p>
                        <p>$200</p>
                    </div>
                    <div className="px-1 text-center m-4">
                        <span className="border-2 p-2 border-[rgb(201, 197, 197)] rounded-2xl hover:bg-gray-400">
                            Add to Cart
                        </span>
                    </div>
                </div>
                <div className="border-2 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)]" />
                    <div className="flex justify-between px-1 text-lg font-semibold">
                        <p>Instax Mini 9</p>
                        <p>$95</p>
                    </div>
                    <div className="px-1 text-center m-4">
                        <span className="border-2 p-2 border-[rgb(201, 197, 197)] rounded-2xl hover:bg-gray-400">
                            Add to Cart
                        </span>
                    </div>
                </div>
                <div className="border-2 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)]" />
                    <div className="flex justify-between px-1 text-lg font-semibold">
                        <p>Base Camp Duffel M</p>
                        <p>$200</p>
                    </div>
                    <div className="px-1 text-center m-4">
                        <span className="border-2 p-2 border-[rgb(201, 197, 197)] rounded-2xl hover:bg-gray-400">
                            Add to Cart
                        </span>
                    </div>
                </div>
                <div className="border-2 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)]" />
                    <div className="flex justify-between px-1 text-lg font-semibold">
                        <p>College Bag</p>
                        <p>$200</p>
                    </div>
                    <div className="px-1 text-center m-4">
                        <span className="border-2 p-2 border-[rgb(201, 197, 197)] rounded-2xl hover:bg-gray-400">
                            Add to Cart
                        </span>
                    </div>
                </div>
                <div className="border-2 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)]" />
                    <div className="flex justify-between px-1 text-lg font-semibold">
                        <p>HeadBand</p>
                        <p>$200</p>
                    </div>
                    <div className="px-1 text-center m-4">
                        <span className="border-2 p-2 border-[rgb(201, 197, 197)] rounded-2xl hover:bg-gray-400">
                            Add to Cart
                        </span>
                    </div>
                </div>
                <div className="border-2 rounded-3xl p-1 border-[rgb(201, 197, 197)]">
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e74b769109fd2f245a_tomford%20watch-min.png" alt="img" className="rounded-2xl bg-[rgb(217,222,229)]" />
                    <div className="flex justify-between px-1 text-lg font-semibold">
                        <p>Watch</p>
                        <p>$200</p>
                    </div>
                    <div className="px-1 text-center m-4">
                        <span className="border-2 p-2 border-[rgb(201, 197, 197)] rounded-2xl hover:bg-gray-400">
                            Add to Cart
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-10">
            <Link to="/products">
                <button className="p-2 bg-blue-500 text-white rounded">Explore More Products</button>
            </Link>
        </div>
        <div className="mx-20 mb-10 mt-20 font-bold text-3xl">Choose By Brands</div>
        <div className="grid grid-cols-4 mx-20 gap-x-16 gap-y-8">
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Staples</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Sprouts</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Grocery Outlet</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Mollie Stones</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Sports Basement</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Container Store</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Target</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
            <div className="flex justify-between p-4 border-2 h-24 bg-[rgb(217,222,229)] w-72 rounded-xl">
                <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png" alt='photu' className="w-14 h-14" />
                <div className="flex flex-col max-w-fit justify-around ml-2">
                    <p className="font-semibold text-lg">Bevmo</p>
                    <p className="font-medium">Delivery within 24 hours</p>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}

export default Home;