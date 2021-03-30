import React, {Component} from 'react';

class Comp3 extends Component {
    render() {

        const {value} = this.props;
        return (
            <div>
                {value}
            </div>
        );
    }
}

export default Comp3;