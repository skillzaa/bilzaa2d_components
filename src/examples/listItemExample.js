import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import ListItem from "../corecomps/listItem/listItem.js";
let b = new Bilzaa2d();
let f = new ListItem();
f.x = 20;
f.y = 10;
f.style.fillStyle = "green";
f.style.fontSize = 300;
f.rectangleStyle.fillStyle = "yellow";
b.add_comp(f);
console.log("b", b);
b.start();
