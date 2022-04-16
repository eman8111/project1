import { Component } from 'react';
import "./Contact.css";
import Star from './../Star/Star';
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="contact  my-5">
                <div className="container py-4">
                    <h2 className="text-uppercase mb-3 fw-bold text-center">contact me</h2>
                    <Star />
                    <div className="myFor w-75 mx-auto mt-5">
                        <input type="text" placeholder='Name' className='form-control mb-4' />
                        <input type="email" placeholder='Email' className='form-control mb-4' />
                        <input type="text" placeholder='Phone' className='form-control mb-4' />
                        <textarea className='form-control mb-4' cols="30" rows="7" placeholder='Message'></textarea>
                        <button className='btn'>send</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;