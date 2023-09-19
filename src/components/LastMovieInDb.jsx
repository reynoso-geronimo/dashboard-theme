import React, { useEffect, useState } from 'react';



export default function LastMovieInDb(props) {
      console.log(props)
      const [user, setUser] = useState({})

     useEffect(() => {
      async function data() {
            if(props.user){
                  setUser(props.user)
            }
          }
          data()
          console.log(user)
     }, [props,user])
  return(

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last user in Database</h5>
                  </div>
                  <div className="card-body">
                            <div className="text-center">
                              
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={`images/avatar/${user.avatar}`} alt="images/avatar/defaultAvatar.png" />
                            </div>
                                  <p>{user.name} {user.lastName}</p>
                                      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver Usuario</a>
                  </div>
            </div>
        </div>

  );
}
