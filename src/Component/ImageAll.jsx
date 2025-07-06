import React from 'react'
import { useContext } from 'react'
import PixabayContext from '../Contect/PixabayContext'

const ImageAll = () => {
    const { imageData } = useContext(PixabayContext)
    return (
        <div className="container my-5" >
            <div className='flex'>
                {imageData.map((image) => <div key={image.id}>
                    <div className="item">
                        <img src={image.largeImageURL} alt='altbalaji' />
                    </div>
                </div>)}

            </div>
        </div>
    )

}

export default ImageAll
