import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';
import './App.css';


class SmurfForm extends Component {
	state={
		name: '',
		age: '',
		height: '',
	};

	handleChange = event => {
		this.setState({[event.target.name]:event.target.value });
    };
    onSubmitHandle = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
    };
    
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandle}>
					<input 
                        onChange={this.handleChange} 
                        placeholder='name' 
                        value={this.state.name} 
                        name='name'
                    />
					<input 
                        onChange={this.handleChange} 
                        placeholder='age' 
                        value={this.state.age} 
                        name='age' 
                    />
					<input
						onChange={this.handleChange}
						placeholder='height'
						value={this.state.height}
						name='height'
					/>
					<button>Add to our world!</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { addSmurf })(SmurfForm);