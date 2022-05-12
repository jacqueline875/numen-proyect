import { useState } from "react";
import Carrito from "../Carrito";
import { FaShoppingCart } from "react-icons/fa";

export default function NavBar(props) {
  const { cartItems, onAdd, onRemove } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between px-10 py-8 overflow-hidden text-white border-b border-gray-400 bg-gradient-to-l from-purple to-gray-900">
      <a href="/">
        <img src="https://edit.org/editor/json_user/2022/05/12/3/8/3824ff149c5c8f0fe8db321b64d66045.jpg" alt="logo" className='h-20 w-50 '  />
      </a>
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] ">
              <li className="my-8 uppercase border-gray-400">
                <a
                  href="#"
                  className="px-6 py-8 text-xs font-bold text-white uppercase "
                >
                  Productos
                </a>
              </li>
              <li className="my-8 uppercase border-gray-400">
                <a
                  href="#"
                  className="px-6 py-8 text-xs font-bold text-white uppercase "
                >
                  Ofertas
                </a>
              </li>
              <li className="my-8 uppercase border-gray-400">
                <a
                  href="#"
                  className="px-6 py-8 text-xs font-bold text-white uppercase "
                >
                  Contacto
                </a>
              </li>
              <li>
                <div className="flex font-bold text-white uppercase">
                  <FaShoppingCart className="px-2 text-4xl" />{" "}
                  {cartItems.length ? (
                    <Carrito
                      onAdd={onAdd}
                      onRemove={onRemove}
                      cartItems={cartItems}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
          <li>
            <a
              href="#"
              className="px-6 py-8 text-xs font-bold text-white uppercase"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-6 py-8 text-xs font-bold text-white uppercase "
            >
              Ofertas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-6 py-8 text-xs font-bold text-white uppercase "
            >
              Contacto
            </a>
          </li>
          <li>
            <div className="flex font-bold text-white uppercase">
              <FaShoppingCart className="px-2 text-4xl" />{" "}
              {cartItems.length ? (
                <Carrito
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                />
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-image: linear-gradient(to left, var(--tw-gradient-stops));
        --tw-gradient-from: #3f3cbb;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(63 60 187 / 0));
        --tw-gradient-to: #111827;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;      
      }
    `}</style>
    </div>
  );
}
