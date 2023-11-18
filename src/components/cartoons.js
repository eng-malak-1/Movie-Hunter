import './cartoons.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import {RiStarSLine , RiStarSFill} from 'react-icons/ri'
import img1 from './assets/luca.jpg'
import img2 from './assets/bee.jpg'
import img3 from './assets/paranormal.jpg'
import img4 from './assets/dragon.jpg'
import img5 from './assets/dragon2.jpg'
import { Carousel } from 'bootstrap'

function Cartoons(){
    return(
        <div className='cartoons'>
            <h1 className='title text-light'>Cartoons</h1>
            <div className='images'>
                

                


                {/* start */}
                <div className='cards'>
                    <img className='stealing' src={img1}/>
                    <div className='play-btn'><i><AiFillPlayCircle/></i></div>
                    <div className='text'>
                    <h4>Luca</h4> <h6> Adventure</h6><p>2021</p>
                    
                    
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
                </div>
                {/* end */}

                {/* start */}
                <div className='cards'>
                    <img className='stealing' src={img2}/>
                    <div className='play-btn'><i><AiFillPlayCircle/></i></div>
                    <div className='text'>
                    <h4>Bee Movie</h4> <h6> Comedy</h6><p>2007</p>
                    
                    
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
                </div>
                {/* end */}

                {/* start */}
                <div className='cards'>
                    <img className='stealing' src={img3}/>
                    <div className='play-btn'><i><AiFillPlayCircle/></i></div>
                    <div className='text'>
                    <h4>Paranormal</h4> <h6> Fantasy</h6><p>2012</p>
                    
                    
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
                </div>
                {/* end */}

                {/* start */}
                <div className='cards'>
                    <img className='stealing' src={img5}/>
                    <div className='play-btn'><i><AiFillPlayCircle/></i></div>
                    <div className='text'>
                    <h4>How To Train Your Dragon </h4> <h6> Family</h6><p>2010</p>
                    
                    
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
                </div>
                {/* end */}

                {/* start */}
                <div className='cards'>
                    <img className='stealing' src={img4}/>
                    <div className='play-btn'><i><AiFillPlayCircle/></i></div>
                    <div className='text'>
                    <h4>How To Train Your Dragon 2</h4> <h6 className='type'> Family</h6><p>2014</p>
                    
                    
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
                </div>
                {/* end */}
                </div>
        </div>
    )
}

export default Cartoons;