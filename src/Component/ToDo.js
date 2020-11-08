import React, { Component } from 'react';

class ToDo extends Component {
    constructor () {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput] // alainlah le tableau items teo alouh d pushena mankao ilay userInput vao2
        }, () => console.log(this.state));
    }

    renderTodo() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button value={item} onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            )
        })
    }

    deleteTodo(event) {
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    render() {
        return (
            <div>
                <h1>ToDo List</h1>
                <form>
                    <input value={this.state.userInput} onChange={this.onChange.bind(this)} type="text" placeholder="Tapez ici" />
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div>
                    {this.renderTodo()}
                </div>
            </div>
        );
    }
}

export default ToDo;