// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

//importing css
import './index.css';

//props - taka nazwa jest konwencją
//komponenty to funkcje więc można przekazywać do niej argumenty i wykorzystywać komponent do pokazywania różnych treści na bazie tego samego wyglądu

function BookList() {
    return (
        <section className="booklist">
            {/* props przekazujemy przy renderowaniu komponentu */}
            <Book 
                img={ firstBook.img } 
                title={ firstBook.title } 
                author={ firstBook.author }
            >   
                <h1>recenzja</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel dolore laudantium! Similique deserunt architecto possimus consequatur veritatis repellendus, at inventore, voluptatem tempora corrupti blanditiis dolorem dolorum corporis laborum debitis!</p> {/* ten paragraf to nasze children wewnątrz komponentu */}
            </Book>
            <Book 
                img={ secondBook.img } 
                title={ secondBook.title } 
                author={ secondBook.author }
            />
        </section>
    );
}

// setup vars, zapisz zmienne jako obiekt

const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg',
    title: 'Elantris: wydanie specjalne Twarda oprawa',
    author: 'Brandon Sanderson'
}

const secondBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81cJzGY%2BJJL._AC_UL200_SR200,200_.jpg',
    title: 'Leadership without easy answers',
    author: 'Ronald A. Heifetz'
}

//PAMIĘTAJ przekazujemy w JSX coś co zawsze zwaraca wartość (expression) np. {6+6}, dlatego nie można przekazać np. czegoś takiego { let x = 6} czyli statement

//wykorzystanie destrukturyzacji + zagnieżdżanie dzieci (poprzez słowo kluczowe children) podanych w komponencie

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

// //wykorzystanie destrukturyzacji - pierwszy sposób (bardziej popularny)

// const Book = ({ img, title, author }) => {
//     return (
//         <article className="book">
//             <img src={ img } alt="book" />
//             <h1>{ title }</h1>
//             <h4>{ author }</h4>
//         </article>
//     )
// }

//wykorzystanie destrukturyzacji - drugi sposób

// const Book = (props) => {
//     const { img, title, author } = props; //dokonujemy destrukturyzacji, możemy wybrać sobie jakie klucze z obiektu nas interesują w tym komponencie

//     return (
//         <article className="book">
//             <img src={ img } alt="book" />
//             <h1>{ title }</h1>
//             <h4>{ author }</h4>
//         </article>
//     )
// }


// const Book = (props) => {
//         console.log(props);

//     return (
//         <article className="book">
//             <img src={ props.img } alt="book" />
//             <h1>{ props.title }</h1>
//             <h4>{ props.author }</h4>
//         </article>
//     )
// }

ReactDom.render(<BookList />, document.getElementById('root'));

//***********************************************************************************************

// przekazywanie zmiennych w JSX
// function BookList() {
//     return (
//         <section className="booklist">
//             <Book />
//         </section>
//     );
// }

// const author = 'Brandon Sanderson'; // zmienna z autorem, wyprowadzenie poza komponent też zadziała bo jest to wtedy zmienna globalna

// //PAMIĘTAJ przekazujemy w JSX coś co zawsze zwaraca wartość (expression) np. {6+6}, dlatego nie można przekazać np. czegoś takiego { let x = 6} czyli statement
// const Book = () => {
//     const title = 'Elantris: wydanie specjalne Twarda oprawa'; //zapisanie tytułu w zmiennej a następnie wstrzyknięcie do h4
//     return (
//         <article className="book">
//             <img src="https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg" alt="book" />
//             <h1>{ title }</h1>
//             <h4>{ author.toUpperCase() }</h4>
//         </article>
//     )
// }


//***************************************************************************
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
