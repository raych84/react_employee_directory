import React, { Component } from "react";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import SearchResults from "./SearchResults";
import API from "../utils/API";



class EmployeeDirectoryContainer extends Component {
	state = {
		search: "",
		results: []
	};
	componentDidMount() {
		this.searchEmployees("Rhonda Arnold");
	};

	searchEmployees = query => {
		API.search(query)
			.then(res => this.setState({ results: res.data }))
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		this.searchEmployees(this.state.search);
	};

	render() {
		return (
			<div>
				<h1>Employee Directory</h1>

				<SearchBox
					value={this.state.search}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				<DataTable
					picture={this.state.picture}
					name={this.state.name}
					phone={this.state.phone}
					email={this.state.email}
					DOB={this.state.dob}
				/>

				<SearchResults results={this.state.results} />
			</div>
		)
	}
}




export default EmployeeDirectoryContainer;