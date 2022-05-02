import React from 'react'

//TODO Agregar esto en un modal. Al hacer clic en la cantidad de items que se ve en el menu (Navbar) deberia aparecer esta informarción en un modal.
const Carrito = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <div className="bg-sky-500 py-8">
      <h2>Carrito de Compras</h2>
      <div>
        {cartItems.length === 0 && <div>Carrito vacio</div>}
      </div>
      {cartItems.map((item) =>
        <div key={item.id} className="">
          <div>
            <img className='w-40 h-48 object-contain' src={item.imageUrl} alt={item.imageUrl} />
            {item.name}
            <button onClick={() => onAdd(item)} className='bg-green-500 py-2 px-3 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800'>+</button>
            <button onClick={() => onRemove(item)} className='bg-red-600 py-2 px-3 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800'>-</button>
            {item.qty} x ${item.price}
          </div>
        </div>
      )}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div>
            <div>Total: ${itemPrice}</div>
          </div>
          <hr />
          <button onClick={() => alert('vas a comprar!')} className='bg-purple py-2 px-3 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800' >Comprar</button>
        </>
      )}

    </div>

  )
}

export default Carrito