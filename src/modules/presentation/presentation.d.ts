import { Bilzaa2d, IDrawable } from "../../../node_modules/bilzaa2d/src/bilzaa2d/index.js";
export default class Presentation {
    bilzaa: Bilzaa2d;
    constructors(): void;
    addClip(clips: IDrawable[]): void;
    add(f: IDrawable): void;
    addGrid(): void;
    addFrameCounter(): void;
    h1mid(content: string, frameStart?: number, frameEnd?: number, fontSize?: number, fontColor?: string, underlineColor?: string, y?: number): void;
    lineMid(content: string, frameStart?: number, frameEnd?: number, y?: number, fontSize?: number, color?: string): void;
}
//# sourceMappingURL=presentation.d.ts.map