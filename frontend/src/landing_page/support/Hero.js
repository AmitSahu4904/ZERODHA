import React from 'react';
function Hero() {
    return (  
        <section className="container-fluid py-5" id="supporthero" >
            <div className="container">
                <div className="d-flex justify-content-between  mb-5" id="supportwrapper">
                    <h2  style={{fontSize: "23px"}}>Support Portal</h2>
                    <a href="" className="text-white  pb-1 border-bottom border-white" style={{fontSize: "17px"}}>Track tickets</a>
                </div></div>
                <div className='container-fluid' >
                <div className="row ">
                    <div className="col-md-7 p-5">
                        <p className="mb-4" style={{fontSize: "23px"}}>Search for an answer or browse help topics to create a ticket</p>
                        <div className="input-group mb-4" style={{maxWidth: "600px"}}>
                            <input type="search" className="form-control form-control-lg" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
                            <span className="input-group-text bg-white">
                                <i className="fa fa-search text-muted"></i>
                            </span>
                        </div>
                        <div className="d-flex flex-wrap gap-4">
                            <a href="" className="text-white  pb-1 border-bottom border-white">Track account opening</a>
                            <a href="" className="text-white  pb-1 border-bottom border-white">Track segment activation</a>
                            <a href="" className="text-white  pb-1 border-bottom border-white">Intraday margins</a>
                            <a href="" className="text-white  pb-1 border-bottom border-white">Kite user manual</a>
                        </div>
                    </div>
                    <div className="col-md-5 p-5">
                        <h4 className=" mb-3">Featured</h4>
                        <ol className="ps-3 fs-6 " >
                            <li className='mb-4'>
                                <a href="" className="text-white text-decoration-underline ">Quarterly Settlement of Funds - July 2025</a>
                            </li>
                            <li>
                                <a href="" className="text-white text-decoration-underline">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
