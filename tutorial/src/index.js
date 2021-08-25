// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

//importing css
import './index.css';

//nested components and react tools

function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg" alt="book" />;

const Title = () => <h1>Elantris: wydanie specjalne Twarda oprawa</h1>;

//poniżej przykład wstawiania inlinowego stylu , jest to widoczne na stronie, wpisuje się to jak obiekt bo działamy w javascripcie oraz obowiązuje camelCase jak w vanilli
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Brandon Sanderson</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));