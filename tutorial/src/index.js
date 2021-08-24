// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

//nested components and react tools

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}

const Person = () => <h2>piotr skołorzyński</h2>;

const Message = () => <p>this is my message</p>;

ReactDom.render(<Greeting />, document.getElementById('root'));