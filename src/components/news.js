import './news.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import {RiStarSLine , RiStarSFill} from 'react-icons/ri'
import img1 from './assets/pooh.jpg'
import img2 from './assets/inside.jpg'
import img3 from './assets/wolf.jpg'
import img4 from './assets/no where.jpg'
import img5 from './assets/reading.jpg'

function News(){

    return(
        <div className="news">
            <h1 className='titleee text-light'>News</h1>
            <div className='images'>
                

                
                {/* start */}
                <div className='cards'>
                    <img className='stealing' src={img4}/>
                    <div className='play-btn'><i><AiFillPlayCircle/></i></div>
                    <div className='text'>
                    <h4>No Where</h4> <h6> Thriller</h6><p>2023</p>
                    
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
                    <img className='stealing' src={img1}/>
                    <div className='play-btn'><i><AiFillPlayCircle/></i></div>
                    <div className='text'>
                    <h4>Winnie the pooh</h4> <h6> Horror</h6><p>2023</p>
                    
                    
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
                    <h4>It lives inside</h4> <h6 className='type'> Horror</h6><p>2023</p>
                    
                    
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
                    <h4>Wolf Garden</h4> <h6> Horror</h6><p>2023</p>
                    
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
                    <h4>The Reading</h4> <h6> Thriller</h6><p>2023</p>
                    
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

            <div className='api'>

            </div>
        </div>
    )
}

export default News;