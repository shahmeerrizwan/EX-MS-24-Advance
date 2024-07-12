import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Products() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    const goToDetailed = (item) => {
        navigate(`/details/${item.id}`)
    }

    return (
        <div>
            <h1>Products</h1>
            {products.map((item, id) => {
                return <div className="containerr" key={id}>

                    <div className="card">
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>{item.title.slice(0, 30)}</h4>
                                    <h3>${item.price}</h3>
                                </div>
                                <div className="view-btn">
                                    <button onClick={() => goToDetailed(item)}>View Details</button>
                                </div>
                            </div>
                            <hr />
                            <div className="btnn-group">
                                <div className="btnn">
                                    <button onClick={() => goToDetailed(item)}>Buy Now</button>
                                </div>
                                <Link to=""> Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>


            })}
        </div>
    )
}
