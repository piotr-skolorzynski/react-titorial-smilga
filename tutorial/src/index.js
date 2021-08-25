// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

//importing css
import './index.css';

function BookList() {
    return (
        <section className="booklist">
            <Book />
        </section>
    );
}

const author = 'Brandon Sanderson'; // zmienna z autorem, wyprowadzenie poza komponent też zadziała bo jest to wtedy zmienna globalna

//PAMIĘTAJ przekazujemy w JSX coś co zawsze zwaraca wartość (expression) np. {6+6}, dlatego nie można przekazać np. czegoś takiego { let x = 6} czyli statement
const Book = () => {
    const title = 'Elantris: wydanie specjalne Twarda oprawa'; //zapisanie tytułu w zmiennej a następnie wstrzyknięcie do h4
    return (
        <article className="book">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg" alt="book" />
            <h1>{ title }</h1>
            <h4>{ author.toUpperCase() }</h4>
        </article>
    )
}

//wcześniejszy przykład rozbijający komponenty na kawałki oraz przykład css

// const Book = () => {
//     return (
//         <article className="book">
//             <Image />
//             <Title />
//             <Author />
//         </article>
//     )
// }

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg" alt="book" />;

// const Title = () => <h1>Elantris: wydanie specjalne Twarda oprawa</h1>;

// //poniżej przykład wstawiania inlinowego stylu , jest to widoczne na stronie, wpisuje się to jak obiekt bo działamy w javascripcie oraz obowiązuje camelCase jak w vanilli
// const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Brandon Sanderson</h4>;



ReactDom.render(<BookList />, document.getElementById('root'));