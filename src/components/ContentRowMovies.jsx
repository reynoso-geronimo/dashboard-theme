import React from 'react';

import Cards from './Cards';
import { useEffect } from 'react';
import "../assets/css/contentWrapper.css";

const ContentRowMovies =function({userInfo,productInfo, ticketInfo}) {
  useEffect(() => {
    console.log(ticketInfo)
  }, [ticketInfo])
  //async componentDidMount() {

    // try {
    //   const apiMovies = await fetch('/api/movies')
    //   const dataMovies = await apiMovies.json();

    //   const apiActors = await fetch('/api/actors')
    //   const dataActors = await apiActors.json()

    //   const totalAwards = dataMovies.data.map((movie) => movie.awards).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    //   this.setState({
    //     totalMovies: dataMovies.data.length,
    //     totalAwards: totalAwards,
    //     actorsQuantity: dataActors.data.length
    //   })

    // } catch (e) {
    //   console.error(e)
    // }
  //}

 
  
    if (window.location.href.includes("/contentRowMovies")) {
      return (
        <div className='contenedorTickets'>
         <div className='row'>
                 <Cards 
                   title = "Usuarios en la base de datos"
                   quantity = {userInfo.count}
                   color = "primary"
                   icon = "fa-user" />
                 <Cards 
                   title = "Total de productos"
                   quantity = {productInfo.count}
                   color = "success"
                   icon = "fa-tags" />
                 <Cards 
                   title = "Total de ventas"
                   quantity = {ticketInfo.count}
                   color = "warning"
                   icon = "fa-file-invoice-dollar" />
         </div> 
         {ticketInfo.tickets.map((ticket) => (
         <div className='ticketContainer'>
          <div className='ticketMainInfo'><h5> Ticket id: {ticket.ticket.id}</h5> <h5> User id: {ticket.ticket.usuario_id}</h5> <h5>{(new Date(ticket.ticket.createdAt)).toLocaleDateString()}</h5> <h5>Estado {ticket.ticket.estado}</h5></div>
          {ticket.products.map((producto)=>(
           <div className='ticketMainInfo'><h5>Producto: {producto.producto.nombre}</h5><h5> Precio: ${producto.precioFechaCompra}</h5> <h5>Talle:{producto.talle}</h5> <h5>Cantidad: {producto.cantidad}</h5></div>
          ))}
         </div>
         ))} 
         </div>
       )
    }else 
    return(
      <div className='row'>
      <Cards 
        title = "Usuarios en la base de datos"
        quantity = {userInfo.count}
        color = "primary"
        icon = "fa-user" />
      <Cards 
        title = "Total de productos"
        quantity = {productInfo.count}
        color = "success"
        icon = "fa-tags" />
      <Cards 
        title = "Total de ventas"
        quantity = {ticketInfo.count}
        color = "warning"
        icon = "fa-file-invoice-dollar" />
</div> 
    )
  
}

export default ContentRowMovies
