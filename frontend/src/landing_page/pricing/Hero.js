import React from 'react';

function Hero() {
    return ( 
       <div className='container mt-5 mb-5'>
        <div className='row text-center '>
            <h1 className=' mt-5' style={{fontSize:'45px'}}>Charges</h1>
            <p className='text-muted mt-2' style={{fontSize:'21px'}}>List of all charges and taxes</p>
        </div>
        <div className='row mt-5 '>
            <div className='col-4 p-5 text-center'>
                <img src='media/images/pricingEquity.svg' alt='' class='pricingheroimg'></img>
                <h1 style={{fontSize:'28px'}}>Free equity delivery</h1>
                <p className='text-muted mt-4' style={{fontSize:'17px'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
              <div className='col-4 p-5 text-center'>
                <img src='media/images/intradayTrades.svg' alt=''class='pricingheroimg'></img>
                <h1 style={{fontSize:'28px'}}>Intraday and F&O trades</h1>
                <p className='text-muted mt-4' style={{fontSize:'17px'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
             <div className='col-4 p-5 text-center'>
                <img src='media/images/pricingEquity.svg' alt=''class='pricingheroimg'></img>
                <h1 style={{fontSize:'28px'}}>Free direct MF</h1>
                <p className='text-muted mt-4' style={{fontSize:'17px'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;
