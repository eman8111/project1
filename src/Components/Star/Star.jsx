import { Component } from "react";
import "./Star.css";

class Star extends Component {
    render() { 
        return (
            <div className="star">
                <p><i class="fa-solid fa-star"></i></p>
            </div>
        );
    }
}
 
export default Star;