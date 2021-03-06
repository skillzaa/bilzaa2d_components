import IDrawable from "./design/IDrawable.js";
import Background from "./background.js";
export default class Bilzaa2d {
    private comps;
    private pack;
    private frame;
    private interval;
    mspf: number;
    totalFrames: number;
    background: Background;
    constructor(totalFrames?: number);
    private draw;
    private drawMiddlegroundComps;
    private drawBackgroundComps;
    private drawForegroundComps;
    add(comp: IDrawable): IDrawable;
    start(): void;
    stop(): void;
}
//# sourceMappingURL=bilzaa2d.d.ts.map