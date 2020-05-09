import React, { Component } from 'react';

class Feedback extends Component {
    componentDidMount() {
        console.log('Feedback Mounted');
    }

    handleClick = () => {
        console.log('Feedback Clicked');
        this.props.history.push('/')
    };//end handleClick

    render() {
        return (
            <div>
                <h1>Feedback</h1>
               
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        );//end return
    };//end render
};//end class

export default Feedback;