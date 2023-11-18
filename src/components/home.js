import './home.css'
import Main from './assets/pretoria.jpg'
import {AiFillPlayCircle} from 'react-icons/ai'
import {RiStarSLine , RiStarSFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Home(){
    
    return(

        
        <div className='home'>
            {/* home section */}

            <img className='main-img' src={Main}></img>
            <div className='content'>

                <div className='text'>
                    <h4>Escape From Pretoria</h4><p>2020</p>
                    
                    
                </div>

                        <div className='stars'>
                            
                        <i><RiStarSLine/></i>  
                        <i><RiStarSLine/></i>
                        <i><RiStarSLine/></i>
                        <i><RiStarSLine/></i>
                        <i><RiStarSLine/></i>
                        </div>

                        
                        <div className='stars-full'>
                            
                        <i><RiStarSFill/></i>  
                        <i><RiStarSFill/></i>
                        <i><RiStarSFill/></i>
                        <i><RiStarSFill/></i>
                        <i><RiStarSFill/></i>
                        </div>

                        <div className='alert'></div>



                <div className='play'>
                <i><AiFillPlayCircle/></i>
                </div>
                
            </div>

            
        </div>
    )
}
    

export default Home;