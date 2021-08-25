// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

//importing css
import './index.css';

// tworzenie prostej listy i jej renderowanie

const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg',
        title: 'Elantris: wydanie specjalne Twarda oprawa',
        author: 'Brandon Sanderson'
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81cJzGY%2BJJL._AC_UL200_SR200,200_.jpg',
        title: 'Leadership without easy answers',
        author: 'Ronald A. Heifetz'
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91CV8GppfYL._AC_UL200_SR200,200_.jpg',
        title: 'Berserk Deluxe Edition HC 08',
        author: 'Kentaro Mira'
    }
]

//przykład wykorzystania metody map do stworzenia elementów listy
// const names = ['john', 'peter', 'susan'];
// const newNames = names.map(name => <h1>{ name }</h1>);

//każdy element listy powinien posiadać swoje indywidualne id dla reacta, który dzięki temu jest w stanie zorientować się co się zmieniło Ta właściwość nazywa się key prop


//przekazywanie właściwości za pomocą spread operator
function BookList() {
    return (
        <section className="booklist">
            { books.map(book => {
                return <Book key={book.id} {...book} />
            })}
        </section>
    );
}

const Book = ({img, title, author}) => { //zamiast props i później linia poniżej można zrobić to właśnie w postaci destrukturyzacji
    //const { img, title, author } = props;
    return (
        <article className="book">
            <img src={ img } alt="book" />
            <h1>{ title }</h1>
            <h4>{ author }</h4>
        </article>
    )
}

// przekazywanie właściwości za pomocą obiektu
// function BookList() {
//     return (
//         <section className="booklist">
//             { books.map(book => {
//                 return <Book key={book.id} book={book} />
//             })}
//         </section>
//     );
// }

// const Book = props => {
//     const { img, title, author } = props.book;
//     return (
//         <article className="book">
//             <img src={ img } alt="book" />
//             <h1>{ title }</h1>
//             <h4>{ author }</h4>
//         </article>
//     )
// }

ReactDom.render(<BookList />, document.getElementById('root'));