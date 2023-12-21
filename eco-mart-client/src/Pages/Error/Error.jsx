import { Link } from 'react-router-dom';
import image from '/src/assets/error.png'
const Error = () => {

  return (
    <>
       <div className='flex flex-col justify-center items-center h-screen'>
        <img src={image} alt="" />
        <h1 className='text-4xl font-semibold mt-3'>Oops! page not found</h1>
        <p className='py-8 text-text'>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
        <Link to={'/'}><button className='bg-primary text-white px-9 py-5 rounded-[43px]'>Back to Home</button></Link>
       </div>
    </>
  );
};

export default Error;