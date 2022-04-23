import Item from "./items";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
    <Item Links={PRODUCTS} title="PRODUCTS" />
    <Item Links={RESOURCES} title="RESOURCES" />
    <Item Links={COMPANY} title="COMPANY" />
    <Item Links={SUPPORT} title="SUPPORT" />
    </div>
);
};

export default ItemsContainer;