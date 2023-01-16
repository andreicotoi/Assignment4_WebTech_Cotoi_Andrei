import React, { Component } from "react";


class RobotForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            mass: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    
    addRobot = (event) => {
        event.preventDefault();
        const {onAdd} = this.props;
        if(onAdd(this.state))
            this.setState({ name: '', type: '', mass: '' });
    }

    render() {
    return (
        <form>
            <label>
            Name:
            <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
            </label>
            <br />
            <label>
            Type:
            <input type="text" name="type" id="type" onChange={this.handleChange} value={this.state.type} />
            </label>
            <br />
            <label>
            Mass:
            <input type="text" name="mass" id="mass" onChange={this.handleChange} value={this.state.mass} />
            </label>
            <br />
            <input type="submit" value="add" id="add-button" onClick={this.addRobot}/>
        </form>
    )
    }
};

export default RobotForm; 
