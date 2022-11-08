import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import logo from '../assets/imgs/logo.jpeg'


const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 left-0 z-10 md:px-7 flex justify-between items-center bg-slate-100'>
      <figure className='flex items-center'>
        <a href="/" className='flex items-center'>
          <img src={logo} width={90} alt="Logotipo da Academia" />
          <h1 className='xs:hidden md:inline text-black -ml-5 font-bold text-2xl'>POWERFIT DDD</h1>
        </a>
      </figure>
      <nav className='xs:-mr-16 md:inline text-black font-semibold mr-10'>
        <ul className='gap-4 p-2 flex w-80'>
          <a href="#">
            <li className='hover:text-red-600 transition-all ease-linear'>INÍCIO</li>
          </a>
          <a href="#modalidades">
            <li className='hover:text-red-600 transition-all ease-linear'>MODALIDADES</li>
          </a>
          <a href="#contato">
            <li className='hover:text-red-600 transition-all ease-linear'>CONTATO</li>
          </a>
        </ul>
      </nav>
      <div className='xs:hidden sm:flex justify-center items-center gap-4 text-red-600 mt-2 mr-5'>
        <a className='hover:text-black transition-all ease-linear' href="https://www.instagram.com/powerfitddd/" target='_blank'>
          <BsInstagram size={25} />
        </a>
        <a className='hover:text-black transition-all ease-linear' href="https://wa.me/5527999942414" target='_blank'>
          <BsWhatsapp size={25} />
        </a>
      </div>
    </div>
  )
}

export default Navbar