import type { Writable } from "svelte/store";
import type { CoDec } from "../..";
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
interface ToType {
    output: Uint8Array;
}
interface ToWritableType {
    output: Writable<Uint8Array>;
}
interface ExtractValue {
    output: this extends {
        mask: infer Mask extends {
            output: any;
        };
        value: {
            readonly key: infer Key extends string;
            readonly type: infer Type;
        };
    } ? {
        [P in Key]: (Mask & {
            type: Type;
        })["output"];
    } : never;
}
interface ExtractValues {
    output: this extends {
        mask: infer Mask;
        values: infer Values;
    } ? Values extends readonly [infer F, ...infer Rest] ? (ExtractValue & {
        value: F;
        mask: Mask;
    })["output"] & (ExtractValues & {
        values: Rest;
        mask: Mask;
    })["output"] : Values extends readonly [] ? {} : never : never;
}
interface ExtractFrames {
    output: this extends {
        mask: infer Mask;
        frames: infer Frames;
    } ? Frames extends readonly [infer F extends {
        values: any;
    }, ...infer Rest] ? [
        Prettify<(ExtractValues & {
            values: F["values"];
            mask: Mask;
        })["output"]>,
        ...(ExtractFrames & {
            frames: Rest;
            mask: Mask;
        })["output"]
    ] : Frames extends readonly [] ? [] : never : never;
}
type ValueDetail<T> = T extends Uint8Array ? {
    key: string;
    default: Uint8Array;
    codec: never;
} : {
    key: string;
    default: T;
    codec?: CoDec<T>;
};
export type FrameDetails = {
    readonly id: string;
    readonly tag?: string;
    readonly values: readonly ValueDetail<any>[];
};
export type ReactiveFrames<T> = (ExtractFrames & {
    frames: T;
    mask: ToWritableType;
})["output"];
export type ReadOnlyFrames<T> = (ExtractFrames & {
    frames: T;
    mask: ToType;
})["output"];
export {};
