import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { login } from '../utils/api';


function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Email:", email);
        // console.log("Password:", password);
        // Add validation or API call logic here

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setLoading(true);
            console.log("Form submitted:", { email, password });
            // Add API call or login logic here

            try {
                const data = await login(email, password); // Call the API function

                if (data.message == 'User Logged In Successfully') {
                    sessionStorage.setItem('isLoggedIn', true);
                    sessionStorage.setItem('role', data.user.role);
                    sessionStorage.setItem('email', data.user.email);
                    navigate('/');
                }
            } catch (error) {
                const errorMap = JSON.parse(error.message); // Parse the error map
                setErrors(errorMap); // Set the error map to the state
                console.error("Signup failed:", error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const validate = () => {
        const errors = {};
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid.";
        }
        if (!password) {
            errors.password = "Password is required.";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }
        return errors;
    };

    // // // Handle email change and validation
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    //     setErrors(validate());
    // };

    // // Handle password change and validation
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    //     setErrors(validate());
    // };

    // useEffect(() => {
    //     setErrors(validate());
    // }, [email, password]);

    useEffect(() => {
        document.title = "Login - Shopkart"
    }, []);

    return <>
        <div class="flex items-center justify-center h-svh bg-black">
            <div class="w-96 text-center rounded-lg flex flex-col justify-around bg-black text-white border-2 border-gray-800 py-8">
                <Link to='/'>
                    <p className="text-3xl">Shopkart - Login</p>
                </Link>
                <form onSubmit={handleSubmit} className="flex flex-col justify-start p-8 text-black">
                    {errors.general && (
                        <p className="text-red-500 text-sm text-left mb-4">{errors.general}</p>
                    )}
                    <div className='mb-4'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // onChange={handleEmailChange}
                            placeholder="Email"
                            className="p-2 rounded-lg bg-slate-800 text-white w-full focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm text-left mt-1">{errors.email}</p>}
                    </div>
                    <div className='relative mb-4'>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // onChange={handlePasswordChange}
                            placeholder="Password"
                            className="p-2 rounded-lg bg-slate-800 text-white w-full focus:outline-none"
                        />
                        {showPassword ? <FaEye className='absolute top-3 left-72  text-white' onClick={() => setShowPassword((prev) => !prev)} /> : <FaEyeSlash className='absolute top-3 left-72  text-white' onClick={() => setShowPassword((prev) => !prev)} />}
                        {errors.password && <p className="text-red-500 text-sm text-left mt-1">{errors.password}</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 p-2 mt-4 rounded-xl text-white font-semibold hover:bg-blue-600 transition">
                        Sign in
                        <span className="pl-2">🚀</span>
                    </button>
                </form>
                <div className='flex flex-col justify-center items-center'>
                    <button type='button'
                        className='bg-black p-2 m-2 rounded-lg text-white flex justify-center items-center border-2 border-gray-800 hover:border-gray-600 transition'
                    >
                        <FcGoogle className='' />
                        <p className='pl-2'>
                            Sign in with Google
                        </p>
                    </button>
                    <Link to='/signup' className="text-blue-400 hover:underline">
                        <p>Don't have an account? Sign up, it's free!</p>
                    </Link>
                </div>
            </div>
        </div>


    </>;
}

export default Login;