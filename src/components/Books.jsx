import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const navigation = useNavigation()
    // console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner />
    }
  
    const { books } = useLoaderData()
    // console.log(books);
    return (
        <div className='my-container
         grid md:grid-cols-2 
         lg:grid-cols-4 mb:8 gap-6'>
            {
                books.map(book => <Book
                key={book.isbn13}
                book={book}
                ></Book>)
            }
        </div>
    );
};

export default Books;