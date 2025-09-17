import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5  '>
            <div className='row'>
                <div className='col-6 '>
                    <h1 className=' fs-2 mb-5'>Unbeatable pricing</h1>
                    <p >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/pricing' style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6 d-flex justify-content-between align-items-center '>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src='media/images/pricing0.svg' alt='Free account opening' style={{ width: "130px" }} />
                        <span className='text-muted' style={{ fontSize: "0.75rem" }}>Free account<br />opening</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src='media/images/pricingEquity.svg' alt='Free equity delivery and direct mutual funds' style={{ width: "130px" }} />
                        <span className='text-muted' style={{ fontSize: "0.75rem" }}>Free equity delivery<br />and direct mutual funds</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src='media/images/pricingMF.svg' alt='Intraday and F&O' style={{ width: "130px", }} />
                        <span className='text-muted' style={{ fontSize: "0.75rem" }}>Intraday and<br />F&amp;O</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pricing;