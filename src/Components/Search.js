import React, { useState } from 'react';
import {STUDENTS} from '../studentsList';
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search({setResidanceList,setError}) {
	const [studentName, setStudentName]=useState();
	const [joiningDate, setJoiningDate]=useState();

	const AddStudent = () =>{
		console.log(studentName)
		STUDENTS.forEach(element => {
			if(element.name!==studentName)
			{
				setError(`Sorry, ${studentName} is not a verified student!`);
				return;
			}

			if(checkValidity(joiningDate,element.validityDate))
			{
				setError(`Sorry, ${studentName}'s validity has Expired!`);
				return;
			}

			if(element.name===studentName && checkValidity(joiningDate,element.validityDate))
			   setResidanceList(prev=>[...prev,element])
		});
	}

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input onChange={(e)=>setStudentName(e.target.value)} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input onChange={(e)=>setJoiningDate(e.target.value)} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"/>
				</div>
			</label>
			<button onClick={AddStudent} type="button" data-testid="addBtn" className="small mb-0">Add</button>
		</div>
	);
}

export default Search;
