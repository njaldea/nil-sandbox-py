import { getContext } from "svelte";
export const codec_json_from_string = {
    encode: (o) => new TextEncoder().encode(JSON.stringify(o)),
    decode: (o) => JSON.parse(new TextDecoder().decode(o))
};
export const codec_bool = {
    encode: (o) => new Uint8Array([o ? 1 : 0]),
    decode: (o) => o[0] === 1
};
export const codec_number = {
    encode: (o) => {
        const buf = new ArrayBuffer(8);
        // Use BigInt for int64, little-endian
        new DataView(buf).setBigInt64(0, BigInt(o), true);
        return new Uint8Array(buf);
    },
    decode: (o) => {
        if (o.byteLength !== 8)
            throw new Error("Invalid buffer size for int64");
        // Truncate to Number (may lose precision for large values)
        return Number(new DataView(o.buffer, o.byteOffset, o.byteLength).getBigInt64(0, true));
    }
};
export const codec_double = {
    encode: (o) => {
        const buf = new ArrayBuffer(8);
        new DataView(buf).setFloat64(0, o);
        return new Uint8Array(buf);
    },
    decode: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength).getFloat64(0)
};
export const codec_string = {
    encode: (o) => new TextEncoder().encode(o),
    decode: (o) => new TextDecoder().decode(o)
};
export const xit = () => {
    return getContext("nil.xit");
};
