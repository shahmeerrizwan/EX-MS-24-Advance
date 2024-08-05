import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Screen Css/Detailed.css'

export default function Detailed() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    const params = useParams();

    const onBack = () => {
        navigate(-1)
    }
    console.log(products);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [params.id])
    console.log(products);
    return (
        <>
            <div className='p-1 cc'>
                <h1>Detailed</h1>
            </div>
            <div className="container">
                <div className="product-image">
                    <img src={products.image} alt="" className="product-pic" />
                </div>
                <div className="product-details">
                    <header>
                        <h1 className="title">{products.title}</h1>
                        <span className="colorCat">{products.category}</span>
                        <div className="price">
                            <span className="before">$999</span>
                            <span className="current">${products.price}</span>
                        </div>
                        <div className="rate">
                            <a href="#!" className="active">★</a>
                            <a href="#!" className="active">★</a>
                            <a href="#!" className="active">★</a>
                            <a href="#!">★</a>
                            <a href="#!">★</a>
                        </div>
                    </header>
                    <article>
                        <h5>Description</h5>
                        <p>{products.description}</p>
                    </article>
                    <div className="controls">
                        <div className="size">
                            <h5>Rating</h5>
                            <a href="#!" className="option">10/8</a>
                        </div>
                        <div className="qty">
                            <h5>Count</h5>
                            <a href="#!" className="option">120</a>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button">
                            <img src="http://co0kie.github.io/codepen/nike-product-page/cart.png" alt="" />
                            <span>add to cart</span>
                        </button>
                        <a href="#"><img src="http://co0kie.github.io/codepen/nike-product-page/share.png" alt="" /></a>
                    </div>
                </div>

            </div>
            <div className='center'>

                <button className='btn btn-signup' onClick={onBack}> Back</button>
            </div>
        </>
    )
}
