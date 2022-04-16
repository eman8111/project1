import { Component } from 'react';
import "./Location.css";

class Location extends Component {
    state = {  } 
    render() { 
        return (
            <div className="location">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="item text-center">
                                <h3 className='text-uppercase fs-3 fw-bold mb-4'>location</h3>
                                <p className='fs-5'>2215 John Daniel Drive<br/>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="item text-center">
                                <h3 className='text-uppercase fs-3 fw-bold mb-4'>AROUND THE WEB</h3>
                                <div className="icon">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    <i class="fa-solid fa-basketball"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <div className="item text-center">
                                <h3 className='text-uppercase fs-3 fw-bold mb-4'>ABOUT FREELANCER</h3>
                                <p className='fs-5'>Freelance is a free to use, MIT<br/> licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Location;