import React from 'react';

class TodoForm extends React.Component {
    //constructor is the function that runs when that class is created
    constructor() {
        //code in here runs when the component is created (sitting in memory in virtual dom- NOT mounted)
        super();
        //super calls the constructor on the parent class
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();

        this.props.addItem(this.state.item);

        this.setState({
            item: ''
        })
    };

    render() {
        //code in here runs when the component renders and re-renders
        //no side effect in here 
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type='text'
                    name='item'
                    value={this.value}
                    onChange={this.handleChanges}
                    placeholder='...todo'
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;