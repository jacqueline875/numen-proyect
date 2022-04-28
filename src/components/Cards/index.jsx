// Shift+ALT+F ordenar codigo
import React from 'react'
import Swal from 'sweetalert2'


const Cards = ({ list }) => {
    const handleModal = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se agrego al carrito correctamente',
            showConfirmButton: false,
            timer: 1500     
        })
    }
    return (

        <div className='flex flex-row flex-wrap items-center justify-center'>            
            {list.map((card, index) => (
                <div className='mt-12 m-2 overflow-hidden bg-gradient-to-br from-purple to-black rounded-lg shadow-lg'>
                    <div className='pt-10 px-10 flex flex-column items-center justify-center' key={index}>
                        <img className='w-40 h-48 object-contain' src={card.imageUrl} alt={card.imageUrl} />
                    </div>
                    <div className='text-white px-6 pb-6 mt-6'>
                        <span className='block opacity-75 -mb-1'>{card.category}</span>
                        <div className='flex justify-between'>
                            <span className='block font-semibold text-xl'>{card.description}</span>
                            <span className='block bg-white rounded-full text-purple text-xs font-bold px-4 py-2 leading-none items-center'>{card.price}</span>
                        </div>
                        <button onClick={()=>handleModal()} className='mt-8 w-48 bg-purple hover:bg-gray-200 hover:text-gray-800 text-white-700 font-semibold  py-2 px-4 border border-purple hover:border-transparent rounded'>
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>       
    )
}

export default Cards