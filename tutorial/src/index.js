// import React from 'react'; - od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

function Greeting() {
    return <h4>this is Piotr and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));

// tagi trzeba zawsze zamykać jak powyżej albo jak w HTML 5 <Greeting></Greeting>