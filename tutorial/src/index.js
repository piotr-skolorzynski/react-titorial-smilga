// import React from 'react'; - od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

// JSX rules:

//return always element - div/ section/ article or Fragment(React.Fragment lub <></>)

//use camelCase for html attribute

// className instead fo html class

//close every element

//formating



function Greeting() {
    return (
        <div>
            <h3>hello people</h3>
            <ul>
                <li>
                    <a href="/">hello world</a>
                </li>
            </ul>
            <img src="" alt="" />
            <input type="text" />
        </div>
    );
}

ReactDom.render(<Greeting />, document.getElementById('root'));

// tagi trzeba zawsze zamykać jak powyżej albo jak w HTML 5 <Greeting></Greeting>