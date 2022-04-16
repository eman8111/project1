import { Component } from 'react';
import "./About.css";
import Star from './../Star/Star';

class About extends Component {
    state = {  } 
    render() { 
        return (
            <div className="about text-center text-white py-5">
                <div className="container py-4">
                    <h2 className='mb-3 text-uppercase fw-bold'>about</h2>
                    <Star />
                    <div className="row py-3 mt-3">
                        <div className="col-md-6 mb-4">
                            <p className='w-75 mx-auto'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6">
                            <p className='w-75 mx-auto'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;
