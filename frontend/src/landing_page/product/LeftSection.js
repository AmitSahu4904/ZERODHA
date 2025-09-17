import React from 'react';

function LeftSection({imageURL , productName, productDescription , tryDemo, learnMore,googlePlay, appStore  }) {
    return ( 
       <div className='container mt-5 '>
              <div className='row mt-5  '>
                <div className='col-7 p-5'>
                    <img src={imageURL} alt='product' className='img-fluid' style={{width:'90%'}} />
                    </div>
                <div className='col-5 p-5'>
                    <h1 className='mb-4' style={{fontSize:'35px'}}>{productName}</h1>
                    <p className='text-muted ' style={{fontSize:'17px' , lineHeight:'1.9'}}>{productDescription}</p>
                    <div className='mt-4'><a href={tryDemo} >Try demo<i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft:'60px'}}>Learn more<i class="fa-solid fa-arrow-right"></i></a></div>
                  <div className='mt-4'>  <a href={googlePlay} > <img src='media/images/googlePlayBadge.svg' alt='google' ></img></a>
                      
                    <a href={appStore} style={{marginLeft:'20px'}} > <img src='media/images/appstoreBadge.svg' alt='appstore' ></img></a></div>
                        
                    </div>
                    </div>
       </div>
     );
}

export default LeftSection;
