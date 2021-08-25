import ReactDom from 'react-dom';
import './index.css';

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

function BookList() {
    return (
        <section className="booklist">
            { books.map(book => {
                return <Book key={book.id} {...book} />
            })}
        </section>
    );
}

//używamy camelCase
//attribute, eventHandler
// pamiętaj, że jeśli wywołujesz na zdarzenie funckję, która przekazuje argumenty to musisz opakować ją w anonimowa funkcję strzałkową (zwykła też działa)

const Book = ({img, title, author}) => { 

    const clickHandler = (e) => {
        alert('hello world');
    }

    //tworzymy funkcję która ma parametr a poniżej przykład jak ją przekazać jako atrybut
    const complexExample = author => {
        console.log(author);
    }

    return (
        <article className="book" onMouseOver={() => {
            console.log(title)
        }}>
            <img src={ img } alt="book" />
            <h1 onClick={() => console.log(title)}>{ title }</h1>
            <h4>{ author }</h4>
            <button style={{marginTop: '1rem'}} type="button" onClick={ clickHandler }>reference example</button>
            <button style={{marginTop: '1rem'}} type="button" onClick={ () => complexExample(author) }>more complex example</button>
        </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'));