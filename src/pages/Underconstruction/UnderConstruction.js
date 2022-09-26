import React, { useState } from 'react'
import Slider from 'react-slick';
import Copyright from '../../components/copyright/Copyright';
import './underconstruction.css'
// import "~slick-carousel/slick/slick.css"; 

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

const carouselImages = [
    "https://res.cloudinary.com/emacon-production/image/upload/v1664179557/myshara/nathan-dumlao-X_bbCAYzlTs-unsplash_uqzubo.jpg",
    "https://res.cloudinary.com/emacon-production/image/upload/v1664179550/myshara/simon-kadula--gkndM1GvSA-unsplash_suylfa.jpg",
    "https://res.cloudinary.com/emacon-production/image/upload/v1664179562/myshara/nathan-dumlao-LTDuGUByp6Y-unsplash_cw7vko.jpg"
]

function UnderConstruction() {
    const [email, setEmail] = useState();

  return (
    <div className='underconstruction'>
        <div className='section_1'>
            <h1>MYSHARA</h1>

            <div className='section_1-1'>
                <h2>Delight your guests. Do what you love. Thrive.</h2>
                <p>
                    Myshara Solutions is a Nairobi-based technology solutions start-up with the purpose of developing a product 
                    that would address and automate most restaurant and hotel operations and services. <br/> <br />

                    Our major objective is to create a system that manages orders, sales, and payments all in one place using strong 
                    cloud-based software, transparent payment processing, and restaurant-grade hardware designed specifically for the 
                    restaurant sector. <br/> <br />

                    You may assist us in developing the greatest product by completing our <a href='https://docs.google.com/forms/d/1ZYrZzzny81PirPOParsKmpYaOcvylkd4bsvrbE5blBo/edit?usp=sharing'>questionnaire</a>. Please subscribe below to receive our most recent update.
                </p>

                <form className='subscribe_container'>
                    <div className='subscribe_container-form'>
                        <h4>Subscribe Now:</h4>
                        <input 
                            type="email" 
                            placeholder='Email Address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <button className='submitSubscription_btn'>
                        <i className='bx bx-right-arrow-alt' ></i>
                    </button>
                </form>

                <Copyright />
            </div>
        </div>

        <div className='section_2'>
            {/* <Slider {...settings}>
                {
                    carouselImages.map((carouselImage, index) => <img src={carouselImage} alt="Myashara Solutions" key={index} />)
                }
            </Slider> */}
            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1664179550/myshara/simon-kadula--gkndM1GvSA-unsplash_suylfa.jpg" alt="Myashara Solutions" />
        </div>
    </div>
  )
}

export default UnderConstruction