import React from 'react';

function ResidentsList({residanceList}) {
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			{residanceList?.map((res=>(
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				<li key="item1" className="slide-up-fade-in">
					{res.name}
				</li>
			</ul>
			)))}
		</div>
	);
}

export default ResidentsList;
