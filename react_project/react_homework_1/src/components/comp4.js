import React, {Component} from 'react';
import "./styleRoz.css";

class Comp4 extends Component {
    
    
    render() {
        
        const {value} = this.props;
        return (
            <div className="rozetkaProp">
                <h3>{value.title}</h3>
                <img src={value.photo} alt=""></img>
                <p>{value.body}</p>

            </div>
        );
    }
}

export default Comp4;