import React from "react";
import Swal from "sweetalert2";

const Carrito = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const handleModal = () => {
    Swal.fire({
      title: "Vamos a iniciar la compra, ¿estás seguro?",
      text: "De todas maneras puedes cancelar en cualquier momento",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Recuerda que todas las transacciones son seguras!", "Vamos!");
      }
    });
  };

  return (
    <>
      <button
        className="bg-pink-500 mx-1 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {cartItems.length}
      </button>
      {showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-0 w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-black">
                  <h3 className="text-3xl font-semibold">Carrito</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-black ">
                  <div>
                    {/* <h2 className='text-xl'>Carrito de Compras</h2> */}
                    <div>
                      {cartItems.length === 0 && <div>Carrito vacio</div>}
                    </div>
                    {cartItems.map((item) => (
                      <div key={item.id} className="">
                        <div className="flex items-center justify-center text-lg">
                          <div>
                            <img
                              className="w-40 h-48 object-contain"
                              src={item.imageUrl}
                              alt={item.imageUrl}
                            />
                          </div>
                          <div className="p-2">{item.name}</div>
                          <div className="p-1">
                            <button
                              onClick={() => onAdd(item)}
                              className="bg-emerald-500 py-2 px-3 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => onRemove(item)}
                              className="bg-red-600 py-2 px-3 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                            >
                              -
                            </button>
                          </div>
                          <div className="p-4">
                            {item.qty} x ${item.price}
                          </div>
                        </div>
                        <hr></hr>
                      </div>
                    ))}
                    {cartItems.length !== 0 && (
                      <>
                        <hr></hr>
                        <div className="text-xl text-right p-6">
                          <div>Total: ${itemPrice}</div>
                        </div>
                        <div className="text-center">
                          <button
                            onClick={() => handleModal()}
                            className="bg-purple py-2 px-3 text-white font-bold uppercase text-lg rounded hover:bg-gray-200 hover:text-gray-800"
                          >
                            Comprar
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Salir
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Carrito;
