import React from 'react'

const BannerPrincipal = () => {
  return (
    <div className="bg-cover bg-center h-auto text-white py-64 px-10 object-fill bg-[url('https://mc.net.co/wp-content/uploads/2020/12/xcomputo-tecnologia-panorama.jpg.pagespeed.ic.YJVB-FRLUJ.webp')]" >
        
       <div className='md:w-1/2'>
        <p className='font-bold text-sm uppercase'>Mira las mejores ofertas</p>
        <p className='text-3xl font-bold'>Todo el mes de mayo</p>
        <p className='text-2xl mb-10 leading-none'>Notebook HP</p>
        <a href='#' className='bg-purple py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800'>Ver más</a>
        </div>  
    </div>
  )
}

export default BannerPrincipal