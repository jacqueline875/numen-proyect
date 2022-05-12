import Item from "./items";
import { PRODUCTOS, RECURSOS, NOSOTROS, SOPORTE } from "./Menus";
const ItemsContainer = () => {
return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
    <Item Links={PRODUCTOS} title="PRODUCTOS" />
    <Item Links={RECURSOS} title="RECURSOS" />
    <Item Links={NOSOTROS} title="NOSOTROS" />
    <Item Links={SOPORTE} title="SOPORTE" />
    </div>
);
};

export default ItemsContainer;