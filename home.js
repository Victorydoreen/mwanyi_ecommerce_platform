import React from 'react'
import YoungImage from '../images/young.jpg'; // Import the coffeeleaf.png image
import './home.css'
import seedsImage from '../images/seeds.png';
import tenderImage from '../images/tender.jpg';
import c7Image from '../images/c7.jpg';
import c1Image from '../images/c1.jpg';
import c6Image from '../images/c6.jpg';
import c5Image from '../images/c5.jpg';
import c2Image from '../images/c2.jpg';
import c8Image from '../images/c8.jpg';
import c9Image from '../images/c9.jpg';
import c4Image from '../images/c4.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='homeb'>
        <div className='headim'>
          <h1>Welcome!</h1>
          <h4>For all of your important coffee supplies and fertilizers, you are in the right place.</h4>
          <button className='acc' ><Link to="/signup">Create Account</Link></button>
          <img className='seed' src={seedsImage} alt="Seeds" />
        </div>
        <div className='headim'>
          <img className='home' src={YoungImage} alt="Young leaf" />
          <h4>The best seedlings for the best yields</h4>
        </div>
      </div>
      <div className='types'>
        <h2>Variety of Coffee Types</h2>
        <div className='imgtypes'>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={c2Image} alt="Seeds" />
            <p>Robusta <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={c5Image} alt="Seeds" />
            <p>Liberica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={c8Image} alt="Seeds" />
            <p>Stenophylla <br/>*****</p>
          </div>
        </div>
        <div className='imgtypes'>
          <div className='pimg'>
            <img className='seed' src={c1Image} alt="Seeds" />
            <p>Indian Monsooned Coffee <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={c9Image} alt="Seeds" />
            <p>Hawaiian Kona Coffee <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={c7Image} alt="Seeds" />
            <p>Ethiopian Yirgacheffe <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={c4Image} alt="Seeds" />
            <p>Jamaican Blue Mountain Coffee <br/>*****</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
