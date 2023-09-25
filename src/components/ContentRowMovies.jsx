import React from 'react';

import Cards from './Cards';

const ContentRowMovies =function({userInfo,productInfo, ticketInfo}) {

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

  
  
    return (
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
