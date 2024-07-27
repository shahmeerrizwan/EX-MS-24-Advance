import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/Pages-Css/Product.css';
import { getData } from '../Components/Firebase/firebaseconfig';
import Swal from 'sweetalert2'; 

export default function Products() {
  const [fireStoreProducts, setFireStoreProducts] = useState<any>([]);

  const navigate = useNavigate();

  const getfirebasedata = async () => {
    Swal.fire({
      title: 'Loading products...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const res = await getData("products");
      setFireStoreProducts([...res]);

      Swal.close();

      if (res.length === 0) {
        Swal.fire({
          icon: 'info',
          title: 'No Data',
          text: 'There are no products available.',
        });
      }
    } catch (err: any) {
      console.error(err);
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to load products.',
      });
    }
  };

  useEffect(() => {
    getfirebasedata();
  }, []);

  return (
    <>
      {fireStoreProducts.length > 0 ? (
        fireStoreProducts.map((item: any) => {
          const { id, price, title, description, image } = item;
          return (
            <div className="containerr" key={id} onClick={() => navigate(`/detail/${id}`)}>
              <div className="card">
                <img src={image} alt={title} />
                <div className="card-body">
                  <div className="row">
                    <div className="card-title">
                      <h4>{title}</h4>
                      <h3>{price} $</h3>
                    </div>
                    <div className="view-btn">
                      <Link to={`/detail/${id}`}>View Details</Link>
                    </div>
                  </div>
                  <hr />
                  <p>{description}</p>
                  <div className="btnn-group">
                    <div className="btnn">
                      <Link to={`/buy/${id}`}>Buy Now</Link>
                    </div>
                    <Link to="/">Cancel</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading products...</p>
      )}
    </>
  );
}
