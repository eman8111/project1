import { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className='text-center py-4 text-white'>
                Copyright © Your Website 2021
            </footer>
        );
    }
}
 
export default Footer;