// import React from 'react'; //- od wersji 17 nie ma konieczności importowania Reacta
import ReactDom from 'react-dom';

//nested components and react tools

function BookList() {
    return (
        <section>
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51rExxvZB+L._SX315_BO1,204,203,200_.jpg" alt="book" />;

const Title = () => <h1>Elantris: wydanie specjalne Twarda oprawa</h1>;

const Author = () => <h4>Brandon Sanderson</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));