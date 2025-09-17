import React from 'react';
import { a } from 'react-router-dom';


function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3  '>
                <h1 className=' text-center' style={{fontSize:'35px'}}>People</h1></div>
             
            <div className='row p-5  text-muted'>
               
               <div className='col-5 p-3 text-center'>
<img src='media/images/nithinKamath.jpg' style={{borderRadius:'100%', width:'70%'}} alt='Nithin'></img>
<p className='mt-3' style={{fontSize:'20px'}}>Nithin Kamath</p>
<p>Founder ,CEO</p>
               </div>
               <div className='col-7 p-3'  style={{lineHeight:'1.8', fontSize:'17px'}}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 href overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
               <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
               <p>Playing basketball is his zen.</p>
               <p>Connect on <a href='/'> Homepage </a>/ <a href=''> TradingQnA </a>/ <a href=''>Twitter</a></p>

               </div>
               </div>
                    </div>
     );
}

export default Team;

