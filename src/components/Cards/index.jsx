// Shift+ALT+F ordenar codigo
import React from 'react'
// Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 1500
//   })

const Cards = ({ list }) => {
    return (
        // <div className="flex flex-row flex-wrap justify-center" >
        //   {list.map((card, index) => (
        //     <div className='flex flex-col items-center justify-center bg-midnight text-white w-28 h-36 m-2 rounded-lg' key={index}>
        //       <img src={card.imageUrl} alt={card.imageUrl} className="w-16 h-16 object-contain" />
        //       <p className='capitalize'>{card.id}</p>
        //     </div>
        //   ))}
        // </div>
        <div className='flex flex-row flex-wrap items-center justify-center'>
            {list.map((card, index) => (
                <div className='m-6 overflow-hidden bg-gradient-to-br from-purple to-bermuda rounded-lg shadow-lg'>
                    <div className='pt-10 px-10 flex flex-column items-center justify-center' key={index}>
                        <img className='w-40 h-48 object-contain' src={card.imageUrl} alt={card.imageUrl} />
                    </div>
                    <div className='text-black px-6 pb-6 mt-6'>
                        <span className='block opacity-75 -mb-1'>{card.category}</span>
                        <div className='flex justify-between'>
                            <span className='block font-semibold text-xl'>{card.description}</span>
                            <span className='block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center'>{card.price}</span>
                        </div>
                        <button className='mt-8 w-48 hover:bg-purple text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded'>
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards