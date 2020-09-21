import React, { Component } from 'react';
import Navbar from './Navbar';
import Counters from './counters';

class index extends Component {

    state = {
        counters:[
            {
                id: 1,
                value: 0
            },
            {
                id: 2,
                value: 0
            },
            {
                id: 3,
                value: 0
            }
        ]
    };

    onHandleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({
            counters
        });
    };

    onHandleReset(){
        const counter = this.state.counters.map(c => {
            c.value = 0
            return c
        });
        this.setState({
            counter
        });
    };

    onHandleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters
        });
    };

    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} 
                        onReset={this.onHandleReset} />
                <h1 className="my-3">Re-usable Counter</h1>
                <Counters counters={this.state.counters}
                          onDelete={this.onHandleDelete}
                          onIncrement={this.onHandleIncrement}
                />
            </React.Fragment>
        );
    }
}

export default index;