import React from 'react';

import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'

import ContentRowMovies from './ContentRowMovies'

export default function ContentRowTop({userInfo,productInfo, ticketInfo}) {

      return (
           
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Theme Dashboard</h1>
          </div>
                <ContentRowMovies userInfo={userInfo} productInfo={productInfo} ticketInfo={ticketInfo} />
                
          <div className="row">
                <LastMovieInDb  user={userInfo.users[userInfo.count-1]}/>
                <GenresInDb  categories={Object.keys(productInfo.countByCategory)} />
          </div>
    </div>

  );
}