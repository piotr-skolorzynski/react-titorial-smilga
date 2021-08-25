// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

//importing css
import './index.css';

// tworzenie prostej listy i jej renderowanie

const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg',
        title: 'Elantris: wydanie specjalne Twarda oprawa',
        author: 'Brandon Sanderson'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81cJzGY%2BJJL._AC_UL200_SR200,200_.jpg',
        title: 'Leadership without easy answers',
        author: 'Ronald A. Heifetz'
    }
]

const names = ['john', 'peter', 'susan'];
//przykład wykorzystania metody map do stworzenia elementów listy
const newNames = names.map(name => <h1>{ name }</h1>);

function BookList() {
    return (
        <section className="booklist">
            {newNames}
        </section>
    );
}

const Book = ({ img, title, author, children }) => {
    return (
        <article className="book">
            <img src={ img } alt="book" />
            <h1>{ title }</h1>
            <h4>{ author }</h4>
            { children }
        </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'));