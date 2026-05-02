export type Action<T> = (target: T) => {
    destroy: () => void;
};
export type Writable<T> = {
    set: (v: T) => void;
    subscribe: (cb: (v: T) => void) => () => void;
    update: (cb: (v: T) => T) => void;
};
export type CoDec<T> = {
    encode: (o: T) => Uint8Array;
    decode: (a: Uint8Array) => T;
};
export type Values = {
    (id: string, data: Uint8Array): Writable<Uint8Array>;
    <T, C extends CoDec<T>>(id: string, data: T, codec: C): Writable<T>;
};
export type Signals = {
    (id: string): (v?: Uint8Array) => void;
    <E>(t: string, encoder: (v: E) => Uint8Array): (v: E) => void;
};
export type Frame = {
    values: Values;
    signals: Signals;
    resub: () => void;
    unsub: () => void;
};
export type Context = {
    values: Values;
    signals: Signals;
    resub: () => void;
    unsub: () => void;
    id: string;
    tag: string | null;
    load_frame_ui: (f: string, tag?: string) => Promise<Action<HTMLElement>>;
    load_frame_data: (f: string, tag?: string) => Promise<Frame>;
};
export declare const codec_json_from_string: {
    encode: (o: any) => Uint8Array<ArrayBuffer>;
    decode: (o: Uint8Array) => any;
};
export declare const codec_bool: {
    encode: (o: boolean) => Uint8Array<ArrayBuffer>;
    decode: (o: Uint8Array) => boolean;
};
export declare const codec_number: {
    encode: (o: number) => Uint8Array<ArrayBuffer>;
    decode: (o: Uint8Array) => number;
};
export declare const codec_double: {
    encode: (o: number) => Uint8Array<ArrayBuffer>;
    decode: (o: Uint8Array) => number;
};
export declare const codec_string: {
    encode: (o: string) => Uint8Array<ArrayBuffer>;
    decode: (o: Uint8Array) => string;
};
export declare const xit: () => Context;
