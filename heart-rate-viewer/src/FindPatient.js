import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import FetchData from './FetchData.js'

class FindPatient extends React.Component {
	constructor() {
		super();
		this.state = {
			"nameTextField": "",
			"nameToSearch": "",
		}
	}

	onNameTextFieldChange = (event) => {
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField);
		this.setState({"nameToSearch": this.state.nameTextField});
	}

	render() {
		return (
			<div>
				<TextField 
					value={this.state.nameTextField}
					onChange={this.onNameTextFieldChange}/>
				<Button onClick={this.onButtonClick}>
					Get Heart Rate Data
				</Button>
				<FetchData userEmail={this.state.nameToSearch} />
			</div>
		);
	}
}

export default FindPatient