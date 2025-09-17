import React from 'react';

function RightSection({imageURL, productName, productDescription,  learnMore}) {
    return (
        <div className='container mt-5'>
              <div className='row mt-5  '>
                <div className=' col-5 p-5 '>
                   <h1 className='mb-4 ' style={{fontSize:'35px' ,marginTop:'60px' }}>{productName}</h1>
                    <p className='text-muted ' style={{fontSize:'17px' , lineHeight:'1.9'}}>{productDescription}</p>
                    <a href={learnMore} style={{marginLeft:'60px'}}>Learn more<i class="fa-solid fa-arrow-right"></i></a></div>
              
                <div className=' col-7  '>
                           <img src={imageURL} alt='product' className='img-fluid' style={{width:'100%'}} />
                    </div>
                    </div>
       </div>
      );
}

export default RightSection;
