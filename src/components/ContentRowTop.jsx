import React from 'react';

import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'

import ContentRowMovies from './ContentRowMovies'

export default function ContentRowTop({data,header,categories,userInfo}) {
 console.log(userInfo);
      return (
      
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Theme Dashboard</h1>
          </div>
                <ContentRowMovies data={data} header={header} />
                
          <div className="row">
                <LastMovieInDb  user={userInfo.users[0]}/>
                <GenresInDb  categories={categories} />
          </div>
    </div>

  );
}