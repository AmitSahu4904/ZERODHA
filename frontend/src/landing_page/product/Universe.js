import React from 'react';
function Universe() {
    return ( 
        
        <div className='container'>
            <div className='row'>
                <p className='text-muted mt-5 mb-5 text-center' style={{fontSize:'21px'}}>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech</a> blog.</p>
                <h1 className='text-center mt-5' style={{fontSize:'34px'}}>The Zerodha Universe</h1>
                <p className='text-center mt-4 'style={{fontSize:'18px'}}>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className='col-4   p-5   '>
                    <img src='media/images/zerodhaFundhouse.png' alt='' className='universe-img'></img>
                    <p className=' text-center text-muted' style={{fontSize:'13px'}}>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p></div>
                  <div className='col-4   p-5   '>
                    <img src='media/images/streakLogo.png' alt='' className='universe-img'></img>
                    <p className=' text-center text-muted'style={{fontSize:'13px'}}>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
                </div>
                  <div className='col-4 p-5  ' >
                    <img src='media/images/sensibullLogo.svg' alt='' className='universe-img'></img>
                    <p className=' text-center text-muted'style={{fontSize:'13px'}}>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p></div>
  <div className='col-4   p-5   '>
                    <img src='media/images/smallcaseLogo.png' alt='' className='universe-img'></img>
                    <p className=' text-center text-muted'style={{fontSize:'13px'}}>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
                </div>
                  <div className='col-4 p-5  ' >
                    <img src='media/images/tijoriLogo.svg' alt='' className='universe-img'></img>
                    <p className=' text-center text-muted'style={{fontSize:'13px'}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
</div>
  <div className='col-4   p-5  '>
                    <img src='media/images/dittoLogo.png' alt='' className='universe-img'></img>
                    <p className=' text-center text-muted'style={{fontSize:'13px'}}>Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
                </div>
                 <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>



     );
}

export default Universe;

