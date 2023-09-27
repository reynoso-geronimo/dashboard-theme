import React, { useEffect, useState } from "react";

export default function LastMovieInDb(props) {
  //console.log(props)
 
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function data() {
      if (props.product) {
       
        setProduct(props.product);
      }
    }
    data();
   
  }, [props, product]);
  if (product === undefined) {
    return (
      
            <h1>CARGANDO</h1>
    )
  } else {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Ultimo producto
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ height: "20rem" }}
                src={`images/productos/${product.image}`}
                alt="images/avatar/defaultAvatar.png"
              />
            </div>
            <p>Nombre: {product.name}</p>
            <p>Categoria: {product.category}</p>
            <p>Categoria: {product.description}</p>
            {/* <a
              className="btn btn-danger"
              target="_blank"
              rel="noreferrer"
              href={`http://localhost:3006${product.detail}`}
            >
              Ver item
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}
