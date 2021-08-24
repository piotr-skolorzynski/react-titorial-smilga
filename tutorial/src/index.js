// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

function Greeting() {
    return (
        <div>
            <h1>hello, world!</h1>
        </div>
    );
}

// //powód dla którego warto pisać z użyciem JSX jest poniżej (straszny bałagan przy użycziu React.createElement). Do tego jeszcze jedna rzecz - jeśli używasz React.createElement to musisz go zaimportować
// const Greeting = () => {
//     return React.createElement('div', {}, React.createElement('h1', {}, 'hello, world!')); 
// }
 
export default Greeting
ReactDom.render(<Greeting />, document.getElementById('root'));

// tagi trzeba zawsze zamykać jak powyżej albo jak w HTML 5 <Greeting></Greeting>