import React from 'react';

const card = ({name, email, id}) => (
	<div className="tc bg-light-green br3 ma2 pa3 dib grow shadow-s bw2">
		<img src={`https://robohash.org/${id}?200x200`} alt="somerobo" />
		<h2>{name}</h2>
		<p>{email}</p>
	</div>
)

export default card;