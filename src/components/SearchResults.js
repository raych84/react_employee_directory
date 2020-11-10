import React from "react";

function SearchResults(props) {
	return (
		<tbody>
			<td>
			<tr>{props.Picture}</tr>
			<tr>{props.Name}</tr>
			<tr>{props.Phone}</tr>
			<tr>{props.Email}</tr>
			<tr>{props.dob}</tr>
			</td>
		</tbody>

	)
}




export default SearchResults;