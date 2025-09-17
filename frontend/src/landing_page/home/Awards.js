import React from 'react';



function Awards() {
    return ( 
        <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='media/images/largestBroker.svg' alt='award-image'></img>
            </div>
              <div className='col-6 p-5 mt-3'>
                <h1 className='text-center fs-2'>Largest Broker in India</h1>
                <p className='mb-5'>We are the largest broker in India with over 10 million clients and a market share of 20%. We have been awarded the Best Broker in India by various financial institutions.</p>
              <div className='row'>
                <div className='col-6'>
                <ul>
                    <li><p>Features and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li>
                </ul></div>
                 <div className='col-6'>
                <ul>
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bounds and Government securities</p></li>
                </ul></div>
                </div>
                <img src='media/images/pressLogos.png' alt='Press-Logos' style={{width:"90%"}}></img>
            </div>

        </div>
        </div>
        
     );
}

export default Awards;