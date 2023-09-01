import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter,AiOutlineBehance,AiOutlineWifi,AiOutlineSearch} from 'react-icons/ai'
import {FiChrome} from 'react-icons/fi'

import './index.css'
const Header=()=>(
    <nav className="header-container">
        <div className="email-telephone-icon-container">
            <div className='email-telephone'>
                <div className='email'>
                    <AiOutlineMail className="icon-1"/> 
                    <p>Email : Info@Restaurent.com</p>
                </div>
                <div className='email'>
                    <BsFillTelephoneFill className="icon-1"/> 
                    <p>Telephone: +1 800 234 5678</p>
                </div>
            </div>
            <div className='icons-container'>
                <FaFacebookF className='icon-1'/>
                <AiOutlineTwitter className='icon-1'/> 
                <FiChrome className='icon-1'/>
                <AiOutlineBehance className='icon-1'/>
                <AiOutlineWifi className='icon-1'/>
                <button type="button" className='button'>Book A Table</button>
            </div>
        </div>
        <hr className='line-separator'/>
        <div className='image-home-contact-container'>
        <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465739/main_logo_1_vedzlr.png" alt="logo" /> 
        <div className='text-container'>
            <p className='text'>Home</p>
            <p className='text'>About Us</p>
            <p className='text'>Offer</p>
            <p className='text'>Menu</p>
            <p className='text'>Team</p>
            <p className='text'>Blog</p>
            <p className='text'>Gallary</p>
            <p className='text'>Contact</p>
            <AiOutlineSearch className='icon-1'/>
        </div>
        </div>
    </nav>
)
export default Header
