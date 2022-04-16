import { Component } from 'react';
import "./Portfolio.css";
import av1 from "../../images/av1.jpg";
import av2 from "../../images/av2.jpg";
import av3 from "../../images/av3.jpg";
import av4 from "../../images/av4.jpg";
import av5 from "../../images/av5.jpg";
import av6 from "../../images/av6.jpg";
import Star from './../Star/Star';

class Portfolio extends Component {
    state = {  }

    render() { 
        return (
            <div className="port text-center my-5">
                <h1 className='text-uppercase fw-bold mt-5 mb-3'>portfolio</h1>
                <Star/>
                <div className="container mt-3">
                    <div className="row g-0">
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="item  position-relative">
                                <img src={av1} alt="" />
                                <div className="layer">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="item  position-relative">
                                <img src={av2} alt="" />
                                <div className="layer">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="item  position-relative">
                                <img src={av3} />
                                <div className="layer">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="item  position-relative">
                                <img src={av4} alt="" />
                                <div className="layer">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="item  position-relative">
                                <img src={av5} alt="" />
                                <div className="layer" >
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-4">
                            <div className="item  position-relative">
                                <img src={av6} alt="" />
                                <div className="layer" >
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Portfolio;
