import Presentation from "../modules/presentation.js";
let pres = new Presentation();
pres.bilzaa.totalFrames = 25;
pres.addFrameCounter();
pres.addGrid();
pres.h1mid("Welcome to Bilzaa2d", 1, 8);
pres.lineMid("Bilzaa2d is a javascript framework for creating presentations", 3, 8, 45, 40, "red");
pres.lineMid("slides and other educational content", 5, 8, 65, 40, "purple");
//--slide 2
pres.h1mid("Salient Features", 8, 12);
pres.lineMid("It works on 1 frame per second", 9, 12, 45, 40, "crimson");
pres.lineMid("Component Base highly extendable", 10, 12, 65, 40, "green");
console.log("pres", pres);
pres.bilzaa.start();
