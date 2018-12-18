import React from 'react'

const scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '800px', margin: '10px auto'}}>
			{props.children}
		</div>
	)
}

export default scroll;