import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGooglePlus} from 'react-icons/ai'

import './index.css'

const Footer=()=>(
    <div className='footer-container'>
        <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465739/main_logo_1_vedzlr.png" alt="logo" /> 
        <p>20.floor. Queenslad Victoria Building. 60 california street california USA</p>
        <p className='important'>hello@dawat.com</p>
        <p className='important'>*88 000 0000 1111</p>
        <div className='icons'>
            <AiOutlineTwitter className='icon'/>
            <AiOutlineGooglePlus className='icon'/>
        </div>

    </div>

)
export default Footer