import React, {Component} from 'react';

class Component1 extends Component {

    butnOnClick = () => {
        console.log(this.value);
        this.value++;
        console.log(this.value);
    }

    render() {

        console.log('component');
        let {value} = this.props;
        console.log(value);

        return (
            <div>
                {value}
                <button onClick={this.butnOnClick}>Add 1</button>
            </div>
        );
    }
}

export default Component1;