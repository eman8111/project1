import { Component } from 'react';
import "./Header.css";
import avatar from "../../../src/images/c1.png";
import Star from '../Star/Star';

class Header extends Component {
    state = {  } 
    render() { 
        return (
           <div className="header">
               <div className="content text-center py-5 text-white">
                    <img src={avatar} alt="" />
                    <h1 className='text-uppercase mt-4 mb-3'>start react</h1>
                    <Star />
                    <h4 className='mt-3'>Graphic Artist - Web Designer - Illustrator</h4>
               </div>
           </div>
        );
    }
}
 
export default Header;
