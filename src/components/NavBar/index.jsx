import React from 'react'

//Docs
 //<>...</> : shorter syntax for explicitly declaring fragments with <React.Fragment>
//https://tailwindcss.com/docs/flex-wrap Utilities for controlling how flex items wrap.
//https://tailwindcss.com/docs/width w-full= width: 100%;
//https://tailwindcss.com/docs/padding
// py-2 = padding-top: 2px; padding-bottom: 2px;
// px-4 = padding-left: 4px; padding-right: 4px;


//fixed es una props, se usa para pasar los datos de un componente a otro
const NavBar = ({ fixed }) => {  
  const [menuOpen, setMenuOpen] = React.useState(false); //Hook, esto lo vimos en la clase del viernes 
  return (
    <> 
      <div className="flex flex-wrap py-2">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#" >
                  NOMBRE DEL MENU
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div //Esto es una condición, si menuOpen es true se aplica Flex, sino, hidden.
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#"
                    >
                      OPCION 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#"
                    >
                      OPCION 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#"
                    >
                      OPCION 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );

   /* return (
    <div className="bg-green-500 py-8">NavBar</div>
  )*/
}

export default NavBar