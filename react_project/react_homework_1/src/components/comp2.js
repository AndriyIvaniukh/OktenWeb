import React, {Component} from 'react';

class Comp2 extends Component {
    render() {

        let {user} = this.props;
        return (
            <div>
                {user.name} - {user.lastname} - {user.status.toString()}
            </div>
        );
    }
}

export default Comp2;