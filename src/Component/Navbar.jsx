import React, { useContext } from 'react'
import PixabayContext from '../Contect/PixabayContext'

const Navbar = () => {
    const { fetchImageBycategor, setQuery } = useContext(PixabayContext)

    return (
        <>
            <div className='container text-center my-3'>
                <button onClick={() => fetchImageBycategory("nature")} type="button" className="btn btn-primary mx-3">Nature</button>
                <button onClick={() => fetchImageBycategory("science")} type="button" className="btn btn-secondary mx-3">Science</button>
                <button onClick={() => fetchImageBycategory("computer")} type="button" className="btn btn-success mx-3">Computer</button>
                <button onClick={() => fetchImageBycategory("buildings")} type="button" className="btn btn-danger mx-3">Buildings</button>
                <button onClick={() => fetchImageBycategory("animals")} type="button" className="btn btn-warning mx-3">Animal</button>
                <button onClick={() => fetchImageBycategory("people")} type="button" className="btn btn-info mx-3">People</button>
                <button onClick={() => fetchImageBycategory("travel")} type="button" className="btn btn-light mx-3">Travel</button>
                <button onClick={() => fetchImageBycategory("food")} type="button" className="btn btn-dark mx-3">Food</button>



            </div>
            <div className="container " style={{ width: "860px" }}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"></input>
            </div>
        </>
    )
}

export default Navbar 
