import React from "react";
import { render } from "react-dom";

class CalcDecIncComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClickIncr() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    handleClickDecr() {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={this.handleClickIncr.bind(this)}>+</button>
                <button onClick={this.handleClickDecr.bind(this)}>-</button>
                <div>Счетчик: {this.state.count}</div>
            </div>
        )
    }
}

export default CalcDecIncComp;