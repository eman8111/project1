import { Component } from 'react';
import "./Navbar.css"; // why we dont do export at css file and we can just import ?!

class Navbar extends Component {
    state = {  } 

    handleActiveLink = () => {
        let links = document.querySelectorAll(".nav-item .nav-link")
        links.forEach((link) => {
            link.addEventListener("click", function(){
                links.forEach(ele => {
                    ele.classList.remove("active")
                })
                link.classList.add("active")
            })
        })
    }
    
    render() { 
        return (
            <>
            <nav className="navbar navbar-expand-md fixed-top">
            <div className="container text-capitalize fw-bold">
                <a className="navbar-brand text-uppercase text-white fs-2" href="#">start react</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
                <span className='text-white text-uppercase'>menu</span><i className="fas fa-bars text-white ms-2"></i>
                </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active fs-5" aria-current="page" href="#" onClick={this.handleActiveLink}>portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link  fs-5" aria-current="page" href="#"
                    onClick={this.handleActiveLink}>about</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link  fs-5" aria-current="page" href="#"
                    onClick={this.handleActiveLink}>contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </>
        );
    }
}
 
export default Navbar;