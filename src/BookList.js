import React from 'react'
import Book from './Book'
import booksList from './bookDate'

 class BookList extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             books: booksList
         }
     }
   
     handleDelete =(id) => {
    const sortedBooks = this.state.books.filter((item) => item.id !== id);            
this.setState({
    books: sortedBooks
})     
};

    render() {
        return (
            <section>
                <h4>my favorite books:</h4>
                {this.state.books.map(item => 
                (<Book  key={item.id} info={item} handleDelete={this.handleDelete}/>))}

            </section>
        )
    }
}

export default BookList;