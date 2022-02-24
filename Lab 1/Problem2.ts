import {Item} from './Item';

let item1 = new Item(1, "Dress Shirt", 21.99);
let item2 = new Item(2, "SweatPants", 15.99);
let item3 = new Item(3, "Jeans", 34.99);

item1.showItemInfo();
item2.showItemInfo();
item3.showItemInfo();
console.log(item3.Price);