import { useState } from "react";
import Carrito from "../Carrito";

export default function NavBar(props) {
  const { cartItems, onAdd, onRemove } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex bg-gradient-to-l from-purple to-gray-900 text-white px-10 items-center justify-between border-b border-gray-400 py-8">
      <a href="/">
        <img src="" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className=" HAMBURGER-ICON space-y-2"
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
                className="h-8 w-8 text-gray-500"
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
              <li className="border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="py-8 px-6 text-white font-bold uppercase text-xs  "
                >
                  Cdfgdfg
                </a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="py-8 px-6 text-white font-bold uppercase text-xs  "
                >
                  Cdfgdfg
                </a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="py-8 px-6 text-white font-bold uppercase text-xs  "
                >
                  Cdfgdfg
                </a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="py-8 px-6 text-white font-bold uppercase text-xs  "
                >
                  Cdfgdfg
                </a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
                <a
                  href="#"
                  className="py-8 px-6 text-white font-bold uppercase text-xs "
                >
                  Cdfgdfg
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-8 px-6 text-white font-bold  text-xs "
                >
                  Carrito {""}
                  {cartItems.length ? (
                    <Carrito
                      onAdd={onAdd}
                      onRemove={onRemove}
                      cartItems={cartItems}
                    />
                  ) : (
                    ""
                  )}
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="#" className="py-8 px-6 text-white font-bold  text-xs">
              Cdfgdfg
            </a>
          </li>
          <li>
            <a href="#" className="py-8 px-6 text-white font-bold  text-xs  ">
              Cdfgdfg
            </a>
          </li>
          <li>
            <a href="#" className="py-8 px-6 text-white font-bold  text-xs  ">
              Cdfgdfg
            </a>
          </li>
          <li>
            <a href="#" className="py-8 px-6 text-white font-bold  text-xs  ">
              Cdfgdfg
            </a>
          </li>
          <li>
            <a href="#" className="py-8 px-6 text-white font-bold  text-xs ">
              Cdfgdfg
            </a>
          </li>
          <li>
            <a href="#" className="py-8 px-6 text-white font-bold  text-xs ">
              Carrito {""}
              {cartItems.length ? (
                <Carrito
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                />
              ) : (
                ""
              )}
            </a>
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
