import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const BookDetails = () => {
    const navigation = useNavigation()
    // console.log(navigation.state);
    if(navigation.state === 'loading'){
        return <LoadingSpinner></LoadingSpinner>
    }
    const bookDetails = useLoaderData()
    const { image, authors, publisher, price, desc, title, year, rating } = bookDetails
    // console.log(bookDetails);
    const [fold, setFold] = useState(true)
    return (
        <div className='my-container'>
            <div className='flex flex-col border rounded shadow-sm  justify-around md:flex-row sm:mx-auto max-w-screen-lg '>
                <div className='lg:w-1/2 h-full'>
                    <img src={image} className='object-cover w-full lg:h-full' alt="" />
                </div>
                <div className='p-8 space-y-3 lg:w-1/2'>
                    <h5 className='leading-none font-extrabold'>{title}</h5>
                    <p>{authors}</p>
                    <p>{publisher}</p>
                    <p>Year : {year}</p>
                    <p>Price: {price}</p>
                    {
                        fold ? <p>{desc.substring(0,100)}... <span onClick={()=>setFold(!fold)} className='cursor-pointer 
                        text-blue-600
                        '>Read More</span></p> :
                        <p>{desc}... <span onClick={()=>setFold(!fold)} className='cursor-pointer 
                    text-blue-600
                    '>Read More</span></p>
                         
                    }
                    <p>Rating : {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;