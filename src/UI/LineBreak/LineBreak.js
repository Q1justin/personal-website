import React from 'react'

const linebreak = (props) => (
    <hr
        style={{
            color: props.color,
            backgroundColor: props.color,
            height: 3,   
        }}
    />
);

export default linebreak;
