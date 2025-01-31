import React, { useEffect, useState } from 'react'
import myimg from './images/pexels-photo-1624496.jpeg';
import Cart from './Cart';
import './Api.css';

const Api = () => {
    const [data, setData] = useState([])
    const [Quantity, setQuantity] = useState(0)

    async function fetchdata() {
        try {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(res => setData(res));
        } catch (err) {
            console.log(err)
        };
    }
    useEffect(() => {
        console.log(fetchdata())
    }, [])

    const handleIncrementQuantity = () => {
        setQuantity((prev) => prev+1)
    }

    console.log('data', data.products);

    return (<div className='allimg'>{data.products?.length > 0 && (<div className='allimg'>
        {
            data.products.map((item, index) => {
                console.log('item.price', item.price)

                return (
                    <div className='imge'>
                        <img src={item.images[0]} alt='hello' width={200}></img>
                        <Cart price={item.price} />
                        <p>{item.description}</p>
                    </div>
                )
            })}
        
    

        </div>
    )}
        </div>
    );
}

export default Api