import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
      <Link to={`/book/${book.isbn13}`}>
          <div className='overflow-hidden
         transition duration-200 transform hover:-translate-y-2

                     relative'>
            <img src={book.image} className='object-cover w-full h-56 md:h-64 xl:h-80' alt="cover image" />
            <div className='bg-black 
                        absolute inset-0 bg-opacity-75
                         opacity-0 hover:opacity-100
                          text-gray-300
                           duration-300
                           flex flex-col
                           py-8
                           px-4
                          '>
                <p>{book.title}</p> <br />
                <p>{book.subtitle.substring(0, 50)}...</p><br />
                <p className='mt-auto'>Price: ${book.price}</p>
            </div>

        </div>
      </Link>
    );
};

export default Book;