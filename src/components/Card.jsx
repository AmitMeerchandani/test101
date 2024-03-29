import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <>
                <div className='card'>
                    <p className='cardp'>

                        <img src="/avtr.png" alt="fotu" height={100} />
                    </p>
                    <h1>{props.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore atque, voluptate nobis temporibus vero! Laboriosam laudantium est repellat quod, aperiam excepturi tempora repellendus voluptatem perferendis, sunt iste suscipit. Quisquam!</p>
                </div>
        </>
    )
}

export default Card