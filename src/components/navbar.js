import './navbar.css'

function Navbar(){
    return(
        <header>
            
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>

                <h2 className='text-light'>MOVIES < span className='text-danger'>HUNTER</span></h2>
                
                <a href='#x' data-toggle='collapse' className='navbar-toggler'>
                <span className='navbar-toggler-icon'></span>
                </a>

                <div id='x' className='collapse navbar-collapse'>

                    <ul className='navbar-nav'>
                        <li className='nav-item'><a className='nav-link' href='#home'>HOME</a></li>
                        <li className='nav-item'><a className='nav-link' href='#movie'>MOVIES</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>CARTOONS</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>NEWS</a></li>
                    </ul>
                        
                    <input  className='search bg-dark' type='search' placeholder='search'></input>

                    <div className='btn btn-danger'>Sign up</div>
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar;