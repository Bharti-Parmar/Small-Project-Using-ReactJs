import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value : this.props.counter.value,
        // tags: ["tag1", "tag2", "tag3"]
    };
    
    
    createCounter(){
        const {value} = this.props.counter;
        return value === 0 ? 'zero' : value;
    }

    // renderTags(){
    //     if(this.state.tags.length === 0) return 'There is no any tag!';
    //     return <ul className="list-unstyled">{this.state.tags.map(tag => <li key={tag}>{tag}</li> )}</ul>;
    // }

    // handleIncrement = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement({
    //         id: 1
    //     });
    // }

    render() {

        let classes = 'badge m-2 p-2 badge-';
        classes += this.props.counter.value === 0 ? 'secondary' : 'success';

        return (
            <div>
                {/* {this.renderTags()} */}
                <span className={classes} >{this.createCounter()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary">+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-warning mx-2" disabled={this.props.counter.value === 0 ? "disabled" : ""}>-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger">X</button>
            </div>
        );
    }
}

export default Counter;