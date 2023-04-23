import React from 'react';
import ReactDom from 'react-dom'

function Hello(props){
    return <h1>hellow world</h1>
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<hello />);