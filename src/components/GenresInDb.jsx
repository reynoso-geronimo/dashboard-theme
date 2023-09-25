
import Genre from './Genre';
export default  function GenresInDb({categories}) {




  
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
                  </div>
                  <div className="card-body fondoCaja">
                    <div className="row ">
                      { Object.entries(categories).map( ([category,count]) => (
                          <Genre key = {category} name={category + ": " + count}/>
                      ))}
                    </div>
                  </div>
            </div>
        </div>
    )
  }



