import React from 'react'

const BookCard = (props)=>{
    return(
        <div className = "card-container">
            <img src ={props.image}alt=""/>
            <div className="desc">
                
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
    <p>{props.published}</p>
    <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
           </div>

        </div>
    )
}

// books = new Books{
//     title : {props.title}
//     author: {props.author}
//     published: {props.published}
// }
// console.log(books)
export default BookCard;
