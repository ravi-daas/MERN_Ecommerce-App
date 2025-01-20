import { Link } from 'react-router-dom';

function Footer() {

    return <>
        <hr className='border-green-500 rounded-lg border-1 my-8'></hr>
        <div className='flex justify-between p-8'>
            <Link to='/'>
                <h2 className="text-green-900 text-2xl font-bold relative -top-0.5">Shopkart</h2>
            </Link>
            <p>All Rights Reserved by Shopkart 2025 </p>
        </div>
    </>;
}

export default Footer;