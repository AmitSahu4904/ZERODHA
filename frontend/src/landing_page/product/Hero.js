import React from 'react';


function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row text-center mt-5 mb-5 p-5'>
                <h1 style={{fontSize:'45px'}}>Zerodha Products</h1>
                <p className='text-muted mt-2 ' style={{fontSize:'21px'}} >Sleek, modern, and intuitive trading platforms</p>
                <p className='text-muted mt-2' style={{fontSize:'17px'}}>Check out our <a href='' >investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;
