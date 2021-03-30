import React, {Component} from 'react';

class Comp1 extends Component {
    render() {
        let {name, id} = this.props;
        return (
            <div>
                {name} - {id}
            </div>
        );
    }
}

export default Comp1;