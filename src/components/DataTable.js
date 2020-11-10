import React from "react";


function DataTable(props) {
	return (
		<table>
			<thead>
				<th>Picture: {props.Picture} </th>
				<th>Name: {props.Name} </th>
				<th>Phone: {props.Phone} </th>
				<th>Email: {props.Email} </th>
				<th>DOB: {props.dob} </th>
			</thead>
			{/* <tbody>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>

				</tr>

			</tbody> */}
		</table>
	)}



export default DataTable;
