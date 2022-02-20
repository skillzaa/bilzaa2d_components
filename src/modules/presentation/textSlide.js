import { XAlignment, YAlignment } from "../../../node_modules/bilzaa2d/src/bilzaa2d/index.js";
import Text from "../../components/text/text.js";
export default function textSlide(frameStart, frameEnd, hdg, lineOne, lineTwo) {
    let r = [];
    r.push(h1mid(hdg, frameStart, frameEnd));
    r.push(lineMid(lineOne, frameStart + 2, frameEnd, 45, 40, "green"));
    r.push(lineMid(lineTwo, frameStart + 3, frameEnd, 65, 40, "purple"));
    return r;
}
function h1mid(content, frameStart = 1, frameEnd = 100, fontSize = 80, fontColor = "red", underlineColor = "green", y = 15) {
    let f = new Text(content);
    f.frameStart = frameStart;
    f.frameEnd = frameEnd;
    f.fontColor = fontColor;
    f.underlineColor = underlineColor;
    f.x = 50;
    f.y = y; //incase want to move y
    f.fontSize = fontSize;
    f.underline = true;
    f.underlineColor = "green";
    f.underlineWidth = 8;
    f.shadow = true;
    f.shadowOffsetX = 10;
    f.shadowOffsetY = 10;
    f.shadowBlur = 8;
    f.xAlignment = XAlignment.Mid;
    f.yAlignment = YAlignment.Mid;
    return f;
}
function lineMid(content, frameStart = 1, frameEnd = 100, y = 45, fontSize = 40, color = "blue") {
    let f = new Text(content);
    f.frameStart = frameStart;
    f.frameEnd = frameEnd;
    f.y = y;
    f.x = 50; //mid
    f.xAlignment = XAlignment.Mid;
    f.fontSize = fontSize;
    f.underline = false;
    f.overline = false;
    f.shadow = false;
    f.fontColor = color;
    return f;
}
