import Slider from 'react-slick'
import Header from '../Header'
import './index.css'

  
const Home=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
       
        
          <Slider {...settings}>
            <div className='background'>
                <div className='home-item-1'>
                    <div>
                        <Header/>
                    </div>
                    <div className='text-cont'>
                <h1>Our Menus</h1>
                <p>SEE WHAT'S NEW TODAY</p>
                </div>
             </div>
            </div>
            <div>
            <div className='home-item-2'>
            <div>
                <Header/>
            </div>
            <div className='text-cont'>
                <h1>Our Menus</h1>
                <p>SEE WHAT'S NEW TODAY</p>
                </div>
            </div>      
            </div> 
            <div>
            <div className='home-item-3'>
            <div>
                        <Header/>
                    </div>
                    <div className='text-cont'>
                <h1>Our Menus</h1>
                <p>SEE WHAT'S NEW TODAY</p>
                </div>
            </div>
            </div>
            
          </Slider>
      
      );
    }
    
export default Home

