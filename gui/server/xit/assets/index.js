var Wt = Object.defineProperty;
var Ft = (i) => {
  throw TypeError(i);
};
var Ht = (i, t, e) => t in i ? Wt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => Ht(i, typeof t != "symbol" ? t + "" : t, e), ct = (i, t, e) => t.has(i) || Ft("Cannot " + e);
var l = (i, t, e) => (ct(i, t, "read from private field"), e ? e.call(i) : t.get(i)), z = (i, t, e) => t.has(i) ? Ft("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), p = (i, t, e, s) => (ct(i, t, "write to private field"), s ? s.call(i, e) : t.set(i, e), e), lt = (i, t, e) => (ct(i, t, "access private method"), e);
import { cF as dt, cG as qt } from "./svelte/store.js";
const ft = 1e4;
var it, ut, w, Q, M, tt, j, g;
class nt {
  constructor(t) {
    z(this, it);
    z(this, w);
    // 0 idle, 1 has connected, 2 keep reconnecting, 3 stopped
    z(this, Q);
    z(this, M);
    z(this, tt);
    z(this, j);
    z(this, g);
    p(this, j, t), p(this, w, 0), p(this, Q, null), p(this, M, null), p(this, tt, null), p(this, g, null);
  }
  on_message(t) {
    p(this, tt, t);
  }
  on_connect(t) {
    p(this, Q, t);
  }
  on_disconnect(t) {
    p(this, M, t);
  }
  // non-blocking (run is blocking in c++)
  // calling it again should not do anything
  start() {
    l(this, g) == null && l(this, w) !== 1 && l(this, w) !== 3 && (p(this, g, new WebSocket(l(this, j))), l(this, g).binaryType = "arraybuffer", l(this, g).onopen = () => {
      l(this, w) == 3 ? this.stop() : (p(this, w, 1), l(this, Q) && l(this, Q).call(this, l(this, j)));
    }, l(this, g).onclose = () => {
      l(this, w) === 1 && (l(this, M) && l(this, M).call(this, l(this, j)), p(this, w, 2), lt(this, it, ut).call(this));
    }, l(this, g).onerror = () => {
      l(this, w) !== 1 && l(this, w) !== 3 ? (p(this, w, 2), lt(this, it, ut).call(this)) : l(this, w) === 3 && this.stop();
    }, l(this, g).onmessage = (t) => {
      l(this, tt) && l(this, tt).call(this, l(this, j), new Uint8Array(t.data));
    });
  }
  stop() {
    p(this, w, 3), l(this, g) != null && l(this, g).readyState !== WebSocket.CONNECTING && (l(this, g).close(), p(this, g, null));
  }
  restart() {
    p(this, w, 0);
  }
  publish(t) {
    l(this, g) != null && l(this, w) == 1 && l(this, g).send(t);
  }
  send(t, e) {
    t === l(this, j) && this.publish(e);
  }
}
it = new WeakSet(), ut = function() {
  l(this, g) != null && (l(this, g).close(), p(this, g, null)), setTimeout(() => this.start(), 1e3);
}, w = new WeakMap(), Q = new WeakMap(), M = new WeakMap(), tt = new WeakMap(), j = new WeakMap(), g = new WeakMap();
const et = (i) => {
  const t = new Uint8Array(4);
  return new DataView(t.buffer).setUint32(0, i, !0), t;
}, st = (i) => {
  const t = new Uint8Array(i.reduce((s, n) => s + n.length, 0));
  let e = 0;
  for (const s of i)
    t.set(s, e), e += s.length;
  return t;
}, Yt = async (i) => new Promise((t, e) => {
  const s = new nt(i), n = setTimeout(() => {
    s.stop(), e("connection failed... stopping");
  }, ft);
  s.on_connect(() => {
    clearTimeout(n), s.stop(), t();
  }), s.start();
}), Ut = async (i, t, e, s) => new Promise((n, r) => {
  const o = new nt(i), h = setTimeout(() => {
    o.stop(), r("timed out, cancelled");
  }, ft), c = st([et(t), e]);
  o.on_connect(() => o.publish(c)), o.on_message((d, _) => {
    const F = new DataView(_.buffer).getUint32(0, !0), m = _.slice(4), I = s(F, m);
    I != null && (clearTimeout(h), o.stop(), n(I));
  }), o.start();
}), bt = (i, t, e) => {
  const s = new nt(i), n = setTimeout(() => {
    s.stop();
  }, ft);
  s.on_connect(() => {
    clearTimeout(n);
    const r = st([et(t), e]);
    s.publish(r), s.stop();
  }), s.start();
};
function Zt(i) {
  return new Worker(
    "" + new URL("bundler.js", import.meta.url).href,
    {
      name: i == null ? void 0 : i.name
    }
  );
}
const ht = 2, y = 4, P = 4, f = 4, E = new Int32Array(2), vt = new Float32Array(E.buffer), St = new Float64Array(E.buffer), rt = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var _t;
(function(i) {
  i[i.UTF8_BYTES = 1] = "UTF8_BYTES", i[i.UTF16_STRING = 2] = "UTF16_STRING";
})(_t || (_t = {}));
class L {
  /**
   * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
   */
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  /**
   * Create and allocate a new ByteBuffer with a given size.
   */
  static allocate(t) {
    return new L(new Uint8Array(t));
  }
  clear() {
    this.position_ = 0;
  }
  /**
   * Get the underlying `Uint8Array`.
   */
  bytes() {
    return this.bytes_;
  }
  /**
   * Get the buffer's position.
   */
  position() {
    return this.position_;
  }
  /**
   * Set the buffer's position.
   */
  setPosition(t) {
    this.position_ = t;
  }
  /**
   * Get the buffer's capacity.
   */
  capacity() {
    return this.bytes_.length;
  }
  readInt8(t) {
    return this.readUint8(t) << 24 >> 24;
  }
  readUint8(t) {
    return this.bytes_[t];
  }
  readInt16(t) {
    return this.readUint16(t) << 16 >> 16;
  }
  readUint16(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8;
  }
  readInt32(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24;
  }
  readUint32(t) {
    return this.readInt32(t) >>> 0;
  }
  readInt64(t) {
    return BigInt.asIntN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readUint64(t) {
    return BigInt.asUintN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readFloat32(t) {
    return E[0] = this.readInt32(t), vt[0];
  }
  readFloat64(t) {
    return E[rt ? 0 : 1] = this.readInt32(t), E[rt ? 1 : 0] = this.readInt32(t + 4), St[0];
  }
  writeInt8(t, e) {
    this.bytes_[t] = e;
  }
  writeUint8(t, e) {
    this.bytes_[t] = e;
  }
  writeInt16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeUint16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeInt32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeUint32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeInt64(t, e) {
    this.writeInt32(t, Number(BigInt.asIntN(32, e))), this.writeInt32(t + 4, Number(BigInt.asIntN(32, e >> BigInt(32))));
  }
  writeUint64(t, e) {
    this.writeUint32(t, Number(BigInt.asUintN(32, e))), this.writeUint32(t + 4, Number(BigInt.asUintN(32, e >> BigInt(32))));
  }
  writeFloat32(t, e) {
    vt[0] = e, this.writeInt32(t, E[0]);
  }
  writeFloat64(t, e) {
    St[0] = e, this.writeInt32(t, E[rt ? 0 : 1]), this.writeInt32(t + 4, E[rt ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + y + P)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < P; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + y + e));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, e) {
    const s = t - this.readInt32(t);
    return e < this.readInt16(s) ? this.readInt16(s + e) : 0;
  }
  /**
   * Initialize any Table-derived type to point to the union at the given offset.
   */
  __union(t, e) {
    return t.bb_pos = e + this.readInt32(e), t.bb = this, t;
  }
  /**
   * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
   * This allocates a new string and converts to wide chars upon each access.
   *
   * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
   * "optionalEncoding" argument. This is useful for avoiding conversion when
   * the data will just be packaged back up in another FlatBuffer later on.
   *
   * @param offset
   * @param opt_encoding Defaults to UTF16_STRING
   */
  __string(t, e) {
    t += this.readInt32(t);
    const s = this.readInt32(t);
    t += y;
    const n = this.bytes_.subarray(t, t + s);
    return e === _t.UTF8_BYTES ? n : this.text_decoder_.decode(n);
  }
  /**
   * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
   * if a string then return a new one
   *
   * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
   * makes the behaviour of __union_with_string different compared to __union
   */
  __union_with_string(t, e) {
    return typeof t == "string" ? this.__string(e) : this.__union(t, e);
  }
  /**
   * Retrieve the relative offset stored at "offset"
   */
  __indirect(t) {
    return t + this.readInt32(t);
  }
  /**
   * Get the start of data of a vector whose offset is stored at "offset" in this object.
   */
  __vector(t) {
    return t + this.readInt32(t) + y;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != P)
      throw new Error("FlatBuffers: file identifier must be length " + P);
    for (let e = 0; e < P; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + y + e))
        return !1;
    return !0;
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, e) {
    const s = [];
    for (let n = 0; n < e; ++n) {
      const r = t(n);
      r !== null && s.push(r);
    }
    return s;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, e) {
    const s = [];
    for (let n = 0; n < e; ++n) {
      const r = t(n);
      r !== null && s.push(r.unpack());
    }
    return s;
  }
}
class O {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let e;
    t ? e = t : e = 1024, this.bb = L.allocate(e), this.space = e;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
  }
  /**
   * In order to save space, fields that are set to their default value
   * don't get serialized into the buffer. Forcing defaults provides a
   * way to manually disable this optimization.
   *
   * @param forceDefaults true always serializes default values
   */
  forceDefaults(t) {
    this.force_defaults = t;
  }
  /**
   * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
   * called finish(). The actual data starts at the ByteBuffer's current position,
   * not necessarily at 0.
   */
  dataBuffer() {
    return this.bb;
  }
  /**
   * Get the bytes representing the FlatBuffer. Only call this after you've
   * called finish().
   */
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  /**
   * Prepare to write an element of `size` after `additional_bytes` have been
   * written, e.g. if you write a string, you need to align such the int length
   * field is aligned to 4 bytes, and the string data follows it directly. If all
   * you need to do is alignment, `additional_bytes` will be 0.
   *
   * @param size This is the of the new element to write
   * @param additional_bytes The padding size
   */
  prep(t, e) {
    t > this.minalign && (this.minalign = t);
    const s = ~(this.bb.capacity() - this.space + e) + 1 & t - 1;
    for (; this.space < s + t + e; ) {
      const n = this.bb.capacity();
      this.bb = O.growByteBuffer(this.bb), this.space += this.bb.capacity() - n;
    }
    this.pad(s);
  }
  pad(t) {
    for (let e = 0; e < t; e++)
      this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(t) {
    this.bb.writeInt8(this.space -= 1, t);
  }
  writeInt16(t) {
    this.bb.writeInt16(this.space -= 2, t);
  }
  writeInt32(t) {
    this.bb.writeInt32(this.space -= 4, t);
  }
  writeInt64(t) {
    this.bb.writeInt64(this.space -= 8, t);
  }
  writeFloat32(t) {
    this.bb.writeFloat32(this.space -= 4, t);
  }
  writeFloat64(t) {
    this.bb.writeFloat64(this.space -= 8, t);
  }
  /**
   * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int8` to add the buffer.
   */
  addInt8(t) {
    this.prep(1, 0), this.writeInt8(t);
  }
  /**
   * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int16` to add the buffer.
   */
  addInt16(t) {
    this.prep(2, 0), this.writeInt16(t);
  }
  /**
   * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int32` to add the buffer.
   */
  addInt32(t) {
    this.prep(4, 0), this.writeInt32(t);
  }
  /**
   * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int64` to add the buffer.
   */
  addInt64(t) {
    this.prep(8, 0), this.writeInt64(t);
  }
  /**
   * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float32` to add the buffer.
   */
  addFloat32(t) {
    this.prep(4, 0), this.writeFloat32(t);
  }
  /**
   * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float64` to add the buffer.
   */
  addFloat64(t) {
    this.prep(8, 0), this.writeFloat64(t);
  }
  addFieldInt8(t, e, s) {
    (this.force_defaults || e != s) && (this.addInt8(e), this.slot(t));
  }
  addFieldInt16(t, e, s) {
    (this.force_defaults || e != s) && (this.addInt16(e), this.slot(t));
  }
  addFieldInt32(t, e, s) {
    (this.force_defaults || e != s) && (this.addInt32(e), this.slot(t));
  }
  addFieldInt64(t, e, s) {
    (this.force_defaults || e !== s) && (this.addInt64(e), this.slot(t));
  }
  addFieldFloat32(t, e, s) {
    (this.force_defaults || e != s) && (this.addFloat32(e), this.slot(t));
  }
  addFieldFloat64(t, e, s) {
    (this.force_defaults || e != s) && (this.addFloat64(e), this.slot(t));
  }
  addFieldOffset(t, e, s) {
    (this.force_defaults || e != s) && (this.addOffset(e), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, e, s) {
    e != s && (this.nested(e), this.slot(t));
  }
  /**
   * Structures are always stored inline, they need to be created right
   * where they're used.  You'll get this assertion failure if you
   * created it elsewhere.
   */
  nested(t) {
    if (t != this.offset())
      throw new TypeError("FlatBuffers: struct must be serialized inline.");
  }
  /**
   * Should not be creating any other object, string or vector
   * while an object is being constructed
   */
  notNested() {
    if (this.isNested)
      throw new TypeError("FlatBuffers: object serialization must not be nested.");
  }
  /**
   * Set the current vtable at `voffset` to the current location in the buffer.
   */
  slot(t) {
    this.vtable !== null && (this.vtable[t] = this.offset());
  }
  /**
   * @returns Offset relative to the end of the buffer.
   */
  offset() {
    return this.bb.capacity() - this.space;
  }
  /**
   * Doubles the size of the backing ByteBuffer and copies the old data towards
   * the end of the new buffer (since we build the buffer backwards).
   *
   * @param bb The current buffer with the existing data
   * @returns A new byte buffer with the old data copied
   * to it. The data is located at the end of the buffer.
   *
   * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
   * it a uint8Array we need to suppress the type check:
   * @suppress {checkTypes}
   */
  static growByteBuffer(t) {
    const e = t.capacity();
    if (e & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const s = e << 1, n = L.allocate(s);
    return n.setPosition(s - e), n.bytes().set(t.bytes(), s - e), n;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(y, 0), this.writeInt32(this.offset() - t + y);
  }
  /**
   * Start encoding a new object in the buffer.  Users will not usually need to
   * call this directly. The FlatBuffers compiler will generate helper methods
   * that call this method internally.
   */
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let e = 0; e < t; e++)
      this.vtable[e] = 0;
    this.isNested = !0, this.object_start = this.offset();
  }
  /**
   * Finish off writing the object that is under construction.
   *
   * @returns The offset to the object inside `dataBuffer`
   */
  endObject() {
    if (this.vtable == null || !this.isNested)
      throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    const t = this.offset();
    let e = this.vtable_in_use - 1;
    for (; e >= 0 && this.vtable[e] == 0; e--)
      ;
    const s = e + 1;
    for (; e >= 0; e--)
      this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
    const n = 2;
    this.addInt16(t - this.object_start);
    const r = (s + n) * ht;
    this.addInt16(r);
    let o = 0;
    const h = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const c = this.bb.capacity() - this.vtables[e];
      if (r == this.bb.readInt16(c)) {
        for (let d = ht; d < r; d += ht)
          if (this.bb.readInt16(h + d) != this.bb.readInt16(c + d))
            continue t;
        o = this.vtables[e];
        break;
      }
    }
    return o ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, o - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t;
  }
  /**
   * Finalize a buffer, poiting to the given `root_table`.
   */
  finish(t, e, s) {
    const n = s ? f : 0;
    if (e) {
      const r = e;
      if (this.prep(this.minalign, y + P + n), r.length != P)
        throw new TypeError("FlatBuffers: file identifier must be length " + P);
      for (let o = P - 1; o >= 0; o--)
        this.writeInt8(r.charCodeAt(o));
    }
    this.prep(this.minalign, y + n), this.addOffset(t), n && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  /**
   * Finalize a size prefixed buffer, pointing to the given `root_table`.
   */
  finishSizePrefixed(t, e) {
    this.finish(t, e, !0);
  }
  /**
   * This checks a required field has been set in a given table that has
   * just been constructed.
   */
  requiredField(t, e) {
    const s = this.bb.capacity() - t, n = s - this.bb.readInt32(s);
    if (!(e < this.bb.readInt16(n) && this.bb.readInt16(n + e) != 0))
      throw new TypeError("FlatBuffers: field " + e + " must be set");
  }
  /**
   * Start a new array/vector of objects.  Users usually will not call
   * this directly. The FlatBuffers compiler will create a start/end
   * method for vector types in generated code.
   *
   * @param elem_size The size of each element in the array
   * @param num_elems The number of elements in the array
   * @param alignment The alignment of the array
   */
  startVector(t, e, s) {
    this.notNested(), this.vector_num_elems = e, this.prep(y, t * e), this.prep(s, t * e);
  }
  /**
   * Finish off the creation of an array and all its elements. The array must be
   * created with `startVector`.
   *
   * @returns The offset at which the newly created array
   * starts.
   */
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If the string passed has
   * already been seen, we return the offset of the already written string
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createSharedString(t) {
    if (!t)
      return 0;
    if (this.string_maps || (this.string_maps = /* @__PURE__ */ new Map()), this.string_maps.has(t))
      return this.string_maps.get(t);
    const e = this.createString(t);
    return this.string_maps.set(t, e), e;
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
   * instead of a string, it is assumed to contain valid UTF-8 encoded data.
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createString(t) {
    if (t == null)
      return 0;
    let e;
    return t instanceof Uint8Array ? e = t : e = this.text_encoder.encode(t), this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length), this.bb.bytes().set(e, this.space), this.endVector();
  }
  /**
   * Create a byte vector.
   *
   * @param v The bytes to add
   * @returns The offset in the buffer where the byte vector starts
   */
  createByteVector(t) {
    return t == null ? 0 : (this.startVector(1, t.length, 1), this.bb.setPosition(this.space -= t.length), this.bb.bytes().set(t, this.space), this.endVector());
  }
  /**
   * A helper function to pack an object
   *
   * @returns offset of obj
   */
  createObjectOffset(t) {
    return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this);
  }
  /**
   * A helper function to pack a list of object
   *
   * @returns list of offsets of each non null object
   */
  createObjectOffsetList(t) {
    const e = [];
    for (let s = 0; s < t.length; ++s) {
      const n = t[s];
      if (n !== null)
        e.push(this.createObjectOffset(n));
      else
        throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return e;
  }
  createStructOffsetList(t, e) {
    return e(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector();
  }
}
class T {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFileInfo(t, e) {
    return (e || new T()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFileInfo(t, e) {
    return t.setPosition(t.position() + f), (e || new T()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  target(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  metadata(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
  }
  metadataLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  metadataArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startFileInfo(t) {
    t.startObject(2);
  }
  static addTarget(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addMetadata(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createMetadataVector(t, e) {
    t.startVector(1, e.length, 1);
    for (let s = e.length - 1; s >= 0; s--)
      t.addInt8(e[s]);
    return t.endVector();
  }
  static startMetadataVector(t, e) {
    t.startVector(1, e, 1);
  }
  static endFileInfo(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createFileInfo(t, e, s) {
    return T.startFileInfo(t), T.addTarget(t, e), T.addMetadata(t, s), T.endFileInfo(t);
  }
  unpack() {
    return new Vt(this.target(), this.bb.createScalarList(this.metadata.bind(this), this.metadataLength()));
  }
  unpackTo(t) {
    t.target = this.target(), t.metadata = this.bb.createScalarList(this.metadata.bind(this), this.metadataLength());
  }
}
class Vt {
  constructor(t = null, e = []) {
    a(this, "target");
    a(this, "metadata");
    this.target = t, this.metadata = e;
  }
  pack(t) {
    const e = this.target !== null ? t.createString(this.target) : 0, s = T.createMetadataVector(t, this.metadata);
    return T.createFileInfo(t, e, s);
  }
}
class S {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFrameCache(t, e) {
    return (e || new S()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFrameCache(t, e) {
    return t.setPosition(t.position() + f), (e || new S()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  target(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  fullTarget(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  content(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  files(t, e) {
    const s = this.bb.__offset(this.bb_pos, 12);
    return s ? (e || new T()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + s) + t * 4), this.bb) : null;
  }
  filesLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFrameCache(t) {
    t.startObject(5);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTarget(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addFullTarget(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static addContent(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static addFiles(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createFilesVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let s = e.length - 1; s >= 0; s--)
      t.addOffset(e[s]);
    return t.endVector();
  }
  static startFilesVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endFrameCache(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), t.requiredField(e, 8), t.requiredField(e, 10), t.requiredField(e, 12), e;
  }
  static createFrameCache(t, e, s, n, r, o) {
    return S.startFrameCache(t), S.addId(t, e), S.addTarget(t, s), S.addFullTarget(t, n), S.addContent(t, r), S.addFiles(t, o), S.endFrameCache(t);
  }
  unpack() {
    return new Ot(this.id(), this.target(), this.fullTarget(), this.content(), this.bb.createObjList(this.files.bind(this), this.filesLength()));
  }
  unpackTo(t) {
    t.id = this.id(), t.target = this.target(), t.fullTarget = this.fullTarget(), t.content = this.content(), t.files = this.bb.createObjList(this.files.bind(this), this.filesLength());
  }
}
class Ot {
  constructor(t = null, e = null, s = null, n = null, r = []) {
    a(this, "id");
    a(this, "target");
    a(this, "fullTarget");
    a(this, "content");
    a(this, "files");
    this.id = t, this.target = e, this.fullTarget = s, this.content = n, this.files = r;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.target !== null ? t.createString(this.target) : 0, n = this.fullTarget !== null ? t.createString(this.fullTarget) : 0, r = this.content !== null ? t.createString(this.content) : 0, o = S.createFilesVector(t, t.createObjectOffsetList(this.files));
    return S.createFrameCache(t, e, s, n, r, o);
  }
}
var u;
(function(i) {
  i[i.Client_Unique_FrameInfo_Request = 0] = "Client_Unique_FrameInfo_Request", i[i.Client_Tagged_FrameInfo_Request = 1] = "Client_Tagged_FrameInfo_Request", i[i.Server_Unique_FrameInfo_File_Response = 2] = "Server_Unique_FrameInfo_File_Response", i[i.Server_Tagged_FrameInfo_File_Response = 3] = "Server_Tagged_FrameInfo_File_Response", i[i.Server_Unique_FrameInfo_Content_Response = 4] = "Server_Unique_FrameInfo_Content_Response", i[i.Server_Tagged_FrameInfo_Content_Response = 5] = "Server_Tagged_FrameInfo_Content_Response", i[i.Client_File_Request = 6] = "Client_File_Request", i[i.Server_File_Response = 7] = "Server_File_Response", i[i.Client_File_Alias_Request = 8] = "Client_File_Alias_Request", i[i.Server_File_Alias_Response = 9] = "Server_File_Alias_Response", i[i.Client_Unique_FrameCache = 10] = "Client_Unique_FrameCache", i[i.Client_Tagged_FrameCache = 11] = "Client_Tagged_FrameCache", i[i.Client_Unique_Frame_Loaded = 12] = "Client_Unique_Frame_Loaded", i[i.Client_Tagged_Frame_Loaded = 13] = "Client_Tagged_Frame_Loaded", i[i.Client_Unique_Frame_Subscribe = 14] = "Client_Unique_Frame_Subscribe", i[i.Client_Tagged_Frame_Subscribe = 15] = "Client_Tagged_Frame_Subscribe", i[i.Client_Unique_Frame_Unsubscribe = 16] = "Client_Unique_Frame_Unsubscribe", i[i.Client_Tagged_Frame_Unsubscribe = 17] = "Client_Tagged_Frame_Unsubscribe", i[i.Client_Unique_Value_Request = 18] = "Client_Unique_Value_Request", i[i.Client_Tagged_Value_Request = 19] = "Client_Tagged_Value_Request", i[i.Server_Unique_Value_Response = 20] = "Server_Unique_Value_Response", i[i.Server_Tagged_Value_Response = 21] = "Server_Tagged_Value_Response", i[i.Unique_Value_Update = 22] = "Unique_Value_Update", i[i.Tagged_Value_Update = 23] = "Tagged_Value_Update", i[i.Client_Unique_Signal_Request = 24] = "Client_Unique_Signal_Request", i[i.Client_Tagged_Signal_Request = 25] = "Client_Tagged_Signal_Request", i[i.Server_Unique_Signal_Response = 26] = "Server_Unique_Signal_Response", i[i.Server_Tagged_Signal_Response = 27] = "Server_Tagged_Signal_Response", i[i.Client_Unique_Signal_Notify = 28] = "Client_Unique_Signal_Notify", i[i.Client_Tagged_Signal_Notify = 29] = "Client_Tagged_Signal_Notify";
})(u || (u = {}));
class x {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSignal(t, e) {
    return (e || new x()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSignal(t, e) {
    return t.setPosition(t.position() + f), (e || new x()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startSignal(t) {
    t.startObject(1);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static endSignal(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), e;
  }
  static createSignal(t, e) {
    return x.startSignal(t), x.addId(t, e), x.endSignal(t);
  }
  unpack() {
    return new Xt(this.id());
  }
  unpackTo(t) {
    t.id = this.id();
  }
}
class Xt {
  constructor(t = null) {
    a(this, "id");
    this.id = t;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0;
    return x.createSignal(t, e);
  }
}
class D {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedFrameLoaded(t, e) {
    return (e || new D()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedFrameLoaded(t, e) {
    return t.setPosition(t.position() + f), (e || new D()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTaggedFrameLoaded(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTaggedFrameLoaded(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createTaggedFrameLoaded(t, e, s) {
    return D.startTaggedFrameLoaded(t), D.addId(t, e), D.addTag(t, s), D.endTaggedFrameLoaded(t);
  }
  unpack() {
    return new gt(this.id(), this.tag());
  }
  unpackTo(t) {
    t.id = this.id(), t.tag = this.tag();
  }
}
class gt {
  constructor(t = null, e = null) {
    a(this, "id");
    a(this, "tag");
    this.id = t, this.tag = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.tag !== null ? t.createString(this.tag) : 0;
    return D.createTaggedFrameLoaded(t, e, s);
  }
}
class G {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedFrameSubscribe(t, e) {
    return (e || new G()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedFrameSubscribe(t, e) {
    return t.setPosition(t.position() + f), (e || new G()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTaggedFrameSubscribe(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTaggedFrameSubscribe(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createTaggedFrameSubscribe(t, e, s) {
    return G.startTaggedFrameSubscribe(t), G.addId(t, e), G.addTag(t, s), G.endTaggedFrameSubscribe(t);
  }
  unpack() {
    return new pt(this.id(), this.tag());
  }
  unpackTo(t) {
    t.id = this.id(), t.tag = this.tag();
  }
}
class pt {
  constructor(t = null, e = null) {
    a(this, "id");
    a(this, "tag");
    this.id = t, this.tag = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.tag !== null ? t.createString(this.tag) : 0;
    return G.createTaggedFrameSubscribe(t, e, s);
  }
}
class q {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedSignalNotify(t, e) {
    return (e || new q()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedSignalNotify(t, e) {
    return t.setPosition(t.position() + f), (e || new q()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  frameId(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  signalId(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
  }
  valueLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  valueArray() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startTaggedSignalNotify(t) {
    t.startObject(4);
  }
  static addFrameId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addSignalId(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static createValueVector(t, e) {
    t.startVector(1, e.length, 1);
    for (let s = e.length - 1; s >= 0; s--)
      t.addInt8(e[s]);
    return t.endVector();
  }
  static startValueVector(t, e) {
    t.startVector(1, e, 1);
  }
  static endTaggedSignalNotify(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), t.requiredField(e, 8), e;
  }
  static createTaggedSignalNotify(t, e, s, n, r) {
    return q.startTaggedSignalNotify(t), q.addFrameId(t, e), q.addTag(t, s), q.addSignalId(t, n), q.addValue(t, r), q.endTaggedSignalNotify(t);
  }
  unpack() {
    return new Rt(this.frameId(), this.tag(), this.signalId(), this.bb.createScalarList(this.value.bind(this), this.valueLength()));
  }
  unpackTo(t) {
    t.frameId = this.frameId(), t.tag = this.tag(), t.signalId = this.signalId(), t.value = this.bb.createScalarList(this.value.bind(this), this.valueLength());
  }
}
class Rt {
  constructor(t = null, e = null, s = null, n = []) {
    a(this, "frameId");
    a(this, "tag");
    a(this, "signalId");
    a(this, "value");
    this.frameId = t, this.tag = e, this.signalId = s, this.value = n;
  }
  pack(t) {
    const e = this.frameId !== null ? t.createString(this.frameId) : 0, s = this.tag !== null ? t.createString(this.tag) : 0, n = this.signalId !== null ? t.createString(this.signalId) : 0, r = q.createValueVector(t, this.value);
    return q.createTaggedSignalNotify(t, e, s, n, r);
  }
}
class W {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedSignalRequest(t, e) {
    return (e || new W()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedSignalRequest(t, e) {
    return t.setPosition(t.position() + f), (e || new W()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTaggedSignalRequest(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTaggedSignalRequest(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createTaggedSignalRequest(t, e, s) {
    return W.startTaggedSignalRequest(t), W.addId(t, e), W.addTag(t, s), W.endTaggedSignalRequest(t);
  }
  unpack() {
    return new Tt(this.id(), this.tag());
  }
  unpackTo(t) {
    t.id = this.id(), t.tag = this.tag();
  }
}
class Tt {
  constructor(t = null, e = null) {
    a(this, "id");
    a(this, "tag");
    this.id = t, this.tag = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.tag !== null ? t.createString(this.tag) : 0;
    return W.createTaggedSignalRequest(t, e, s);
  }
}
class U {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedSignalResponse(t, e) {
    return (e || new U()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedSignalResponse(t, e) {
    return t.setPosition(t.position() + f), (e || new U()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  signals(t, e) {
    const s = this.bb.__offset(this.bb_pos, 8);
    return s ? (e || new x()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + s) + t * 4), this.bb) : null;
  }
  signalsLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startTaggedSignalResponse(t) {
    t.startObject(3);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addSignals(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static createSignalsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let s = e.length - 1; s >= 0; s--)
      t.addOffset(e[s]);
    return t.endVector();
  }
  static startSignalsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endTaggedSignalResponse(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), t.requiredField(e, 8), e;
  }
  static createTaggedSignalResponse(t, e, s, n) {
    return U.startTaggedSignalResponse(t), U.addId(t, e), U.addTag(t, s), U.addSignals(t, n), U.endTaggedSignalResponse(t);
  }
  unpack() {
    return new $t(this.id(), this.tag(), this.bb.createObjList(this.signals.bind(this), this.signalsLength()));
  }
  unpackTo(t) {
    t.id = this.id(), t.tag = this.tag(), t.signals = this.bb.createObjList(this.signals.bind(this), this.signalsLength());
  }
}
class $t {
  constructor(t = null, e = null, s = []) {
    a(this, "id");
    a(this, "tag");
    a(this, "signals");
    this.id = t, this.tag = e, this.signals = s;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.tag !== null ? t.createString(this.tag) : 0, n = U.createSignalsVector(t, t.createObjectOffsetList(this.signals));
    return U.createTaggedSignalResponse(t, e, s, n);
  }
}
class H {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedValueRequest(t, e) {
    return (e || new H()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedValueRequest(t, e) {
    return t.setPosition(t.position() + f), (e || new H()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTaggedValueRequest(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTaggedValueRequest(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createTaggedValueRequest(t, e, s) {
    return H.startTaggedValueRequest(t), H.addId(t, e), H.addTag(t, s), H.endTaggedValueRequest(t);
  }
  unpack() {
    return new kt(this.id(), this.tag());
  }
  unpackTo(t) {
    t.id = this.id(), t.tag = this.tag();
  }
}
class kt {
  constructor(t = null, e = null) {
    a(this, "id");
    a(this, "tag");
    this.id = t, this.tag = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.tag !== null ? t.createString(this.tag) : 0;
    return H.createTaggedValueRequest(t, e, s);
  }
}
class v {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsValue(t, e) {
    return (e || new v()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsValue(t, e) {
    return t.setPosition(t.position() + f), (e || new v()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
  }
  valueLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  valueArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startValue(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createValueVector(t, e) {
    t.startVector(1, e.length, 1);
    for (let s = e.length - 1; s >= 0; s--)
      t.addInt8(e[s]);
    return t.endVector();
  }
  static startValueVector(t, e) {
    t.startVector(1, e, 1);
  }
  static endValue(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createValue(t, e, s) {
    return v.startValue(t), v.addId(t, e), v.addValue(t, s), v.endValue(t);
  }
  unpack() {
    return new At(this.id(), this.bb.createScalarList(this.value.bind(this), this.valueLength()));
  }
  unpackTo(t) {
    t.id = this.id(), t.value = this.bb.createScalarList(this.value.bind(this), this.valueLength());
  }
}
class At {
  constructor(t = null, e = []) {
    a(this, "id");
    a(this, "value");
    this.id = t, this.value = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = v.createValueVector(t, this.value);
    return v.createValue(t, e, s);
  }
}
class V {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedValueResponse(t, e) {
    return (e || new V()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedValueResponse(t, e) {
    return t.setPosition(t.position() + f), (e || new V()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  values(t, e) {
    const s = this.bb.__offset(this.bb_pos, 8);
    return s ? (e || new v()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + s) + t * 4), this.bb) : null;
  }
  valuesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startTaggedValueResponse(t) {
    t.startObject(3);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addValues(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static createValuesVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let s = e.length - 1; s >= 0; s--)
      t.addOffset(e[s]);
    return t.endVector();
  }
  static startValuesVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endTaggedValueResponse(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), t.requiredField(e, 8), e;
  }
  static createTaggedValueResponse(t, e, s, n) {
    return V.startTaggedValueResponse(t), V.addId(t, e), V.addTag(t, s), V.addValues(t, n), V.endTaggedValueResponse(t);
  }
  unpack() {
    return new Jt(this.id(), this.tag(), this.bb.createObjList(this.values.bind(this), this.valuesLength()));
  }
  unpackTo(t) {
    t.id = this.id(), t.tag = this.tag(), t.values = this.bb.createObjList(this.values.bind(this), this.valuesLength());
  }
}
class Jt {
  constructor(t = null, e = null, s = []) {
    a(this, "id");
    a(this, "tag");
    a(this, "values");
    this.id = t, this.tag = e, this.values = s;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.tag !== null ? t.createString(this.tag) : 0, n = V.createValuesVector(t, t.createObjectOffsetList(this.values));
    return V.createTaggedValueResponse(t, e, s, n);
  }
}
class N {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTaggedValueUpdate(t, e) {
    return (e || new N()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTaggedValueUpdate(t, e) {
    return t.setPosition(t.position() + f), (e || new N()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  tag(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? (t || new v()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  static startTaggedValueUpdate(t) {
    t.startObject(3);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addTag(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static endTaggedValueUpdate(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), t.requiredField(e, 8), e;
  }
  unpack() {
    return new yt(this.id(), this.tag(), this.value() !== null ? this.value().unpack() : null);
  }
  unpackTo(t) {
    t.id = this.id(), t.tag = this.tag(), t.value = this.value() !== null ? this.value().unpack() : null;
  }
}
class yt {
  constructor(t = null, e = null, s = null) {
    a(this, "id");
    a(this, "tag");
    a(this, "value");
    this.id = t, this.tag = e, this.value = s;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.tag !== null ? t.createString(this.tag) : 0, n = this.value !== null ? this.value.pack(t) : 0;
    return N.startTaggedValueUpdate(t), N.addId(t, e), N.addTag(t, s), N.addValue(t, n), N.endTaggedValueUpdate(t);
  }
}
class X {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueFrameLoaded(t, e) {
    return (e || new X()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueFrameLoaded(t, e) {
    return t.setPosition(t.position() + f), (e || new X()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startUniqueFrameLoaded(t) {
    t.startObject(1);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static endUniqueFrameLoaded(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), e;
  }
  static createUniqueFrameLoaded(t, e) {
    return X.startUniqueFrameLoaded(t), X.addId(t, e), X.endUniqueFrameLoaded(t);
  }
  unpack() {
    return new It(this.id());
  }
  unpackTo(t) {
    t.id = this.id();
  }
}
class It {
  constructor(t = null) {
    a(this, "id");
    this.id = t;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0;
    return X.createUniqueFrameLoaded(t, e);
  }
}
class $ {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueFrameSubscribe(t, e) {
    return (e || new $()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueFrameSubscribe(t, e) {
    return t.setPosition(t.position() + f), (e || new $()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startUniqueFrameSubscribe(t) {
    t.startObject(1);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static endUniqueFrameSubscribe(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), e;
  }
  static createUniqueFrameSubscribe(t, e) {
    return $.startUniqueFrameSubscribe(t), $.addId(t, e), $.endUniqueFrameSubscribe(t);
  }
  unpack() {
    return new wt(this.id());
  }
  unpackTo(t) {
    t.id = this.id();
  }
}
class wt {
  constructor(t = null) {
    a(this, "id");
    this.id = t;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0;
    return $.createUniqueFrameSubscribe(t, e);
  }
}
class R {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueSignalNotify(t, e) {
    return (e || new R()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueSignalNotify(t, e) {
    return t.setPosition(t.position() + f), (e || new R()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  frameId(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  signalId(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
  }
  valueLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  valueArray() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startUniqueSignalNotify(t) {
    t.startObject(3);
  }
  static addFrameId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addSignalId(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static createValueVector(t, e) {
    t.startVector(1, e.length, 1);
    for (let s = e.length - 1; s >= 0; s--)
      t.addInt8(e[s]);
    return t.endVector();
  }
  static startValueVector(t, e) {
    t.startVector(1, e, 1);
  }
  static endUniqueSignalNotify(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createUniqueSignalNotify(t, e, s, n) {
    return R.startUniqueSignalNotify(t), R.addFrameId(t, e), R.addSignalId(t, s), R.addValue(t, n), R.endUniqueSignalNotify(t);
  }
  unpack() {
    return new Lt(this.frameId(), this.signalId(), this.bb.createScalarList(this.value.bind(this), this.valueLength()));
  }
  unpackTo(t) {
    t.frameId = this.frameId(), t.signalId = this.signalId(), t.value = this.bb.createScalarList(this.value.bind(this), this.valueLength());
  }
}
class Lt {
  constructor(t = null, e = null, s = []) {
    a(this, "frameId");
    a(this, "signalId");
    a(this, "value");
    this.frameId = t, this.signalId = e, this.value = s;
  }
  pack(t) {
    const e = this.frameId !== null ? t.createString(this.frameId) : 0, s = this.signalId !== null ? t.createString(this.signalId) : 0, n = R.createValueVector(t, this.value);
    return R.createUniqueSignalNotify(t, e, s, n);
  }
}
class J {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueSignalRequest(t, e) {
    return (e || new J()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueSignalRequest(t, e) {
    return t.setPosition(t.position() + f), (e || new J()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startUniqueSignalRequest(t) {
    t.startObject(1);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static endUniqueSignalRequest(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), e;
  }
  static createUniqueSignalRequest(t, e) {
    return J.startUniqueSignalRequest(t), J.addId(t, e), J.endUniqueSignalRequest(t);
  }
  unpack() {
    return new Ct(this.id());
  }
  unpackTo(t) {
    t.id = this.id();
  }
}
class Ct {
  constructor(t = null) {
    a(this, "id");
    this.id = t;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0;
    return J.createUniqueSignalRequest(t, e);
  }
}
class k {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueSignalResponse(t, e) {
    return (e || new k()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueSignalResponse(t, e) {
    return t.setPosition(t.position() + f), (e || new k()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  signals(t, e) {
    const s = this.bb.__offset(this.bb_pos, 6);
    return s ? (e || new x()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + s) + t * 4), this.bb) : null;
  }
  signalsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startUniqueSignalResponse(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addSignals(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createSignalsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let s = e.length - 1; s >= 0; s--)
      t.addOffset(e[s]);
    return t.endVector();
  }
  static startSignalsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endUniqueSignalResponse(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createUniqueSignalResponse(t, e, s) {
    return k.startUniqueSignalResponse(t), k.addId(t, e), k.addSignals(t, s), k.endUniqueSignalResponse(t);
  }
  unpack() {
    return new Kt(this.id(), this.bb.createObjList(this.signals.bind(this), this.signalsLength()));
  }
  unpackTo(t) {
    t.id = this.id(), t.signals = this.bb.createObjList(this.signals.bind(this), this.signalsLength());
  }
}
class Kt {
  constructor(t = null, e = []) {
    a(this, "id");
    a(this, "signals");
    this.id = t, this.signals = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = k.createSignalsVector(t, t.createObjectOffsetList(this.signals));
    return k.createUniqueSignalResponse(t, e, s);
  }
}
class K {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueValueRequest(t, e) {
    return (e || new K()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueValueRequest(t, e) {
    return t.setPosition(t.position() + f), (e || new K()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startUniqueValueRequest(t) {
    t.startObject(1);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static endUniqueValueRequest(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), e;
  }
  static createUniqueValueRequest(t, e) {
    return K.startUniqueValueRequest(t), K.addId(t, e), K.endUniqueValueRequest(t);
  }
  unpack() {
    return new jt(this.id());
  }
  unpackTo(t) {
    t.id = this.id();
  }
}
class jt {
  constructor(t = null) {
    a(this, "id");
    this.id = t;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0;
    return K.createUniqueValueRequest(t, e);
  }
}
class A {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueValueResponse(t, e) {
    return (e || new A()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueValueResponse(t, e) {
    return t.setPosition(t.position() + f), (e || new A()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  values(t, e) {
    const s = this.bb.__offset(this.bb_pos, 6);
    return s ? (e || new v()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + s) + t * 4), this.bb) : null;
  }
  valuesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startUniqueValueResponse(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addValues(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createValuesVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let s = e.length - 1; s >= 0; s--)
      t.addOffset(e[s]);
    return t.endVector();
  }
  static startValuesVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endUniqueValueResponse(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  static createUniqueValueResponse(t, e, s) {
    return A.startUniqueValueResponse(t), A.addId(t, e), A.addValues(t, s), A.endUniqueValueResponse(t);
  }
  unpack() {
    return new Qt(this.id(), this.bb.createObjList(this.values.bind(this), this.valuesLength()));
  }
  unpackTo(t) {
    t.id = this.id(), t.values = this.bb.createObjList(this.values.bind(this), this.valuesLength());
  }
}
class Qt {
  constructor(t = null, e = []) {
    a(this, "id");
    a(this, "values");
    this.id = t, this.values = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = A.createValuesVector(t, t.createObjectOffsetList(this.values));
    return A.createUniqueValueResponse(t, e, s);
  }
}
class Y {
  constructor() {
    a(this, "bb", null);
    a(this, "bb_pos", 0);
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUniqueValueUpdate(t, e) {
    return (e || new Y()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUniqueValueUpdate(t, e) {
    return t.setPosition(t.position() + f), (e || new Y()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new v()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  static startUniqueValueUpdate(t) {
    t.startObject(2);
  }
  static addId(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endUniqueValueUpdate(t) {
    const e = t.endObject();
    return t.requiredField(e, 4), t.requiredField(e, 6), e;
  }
  unpack() {
    return new Pt(this.id(), this.value() !== null ? this.value().unpack() : null);
  }
  unpackTo(t) {
    t.id = this.id(), t.value = this.value() !== null ? this.value().unpack() : null;
  }
}
class Pt {
  constructor(t = null, e = null) {
    a(this, "id");
    a(this, "value");
    this.id = t, this.value = e;
  }
  pack(t) {
    const e = this.id !== null ? t.createString(this.id) : 0, s = this.value !== null ? this.value.pack(t) : 0;
    return Y.startUniqueValueUpdate(t), Y.addId(t, e), Y.addValue(t, s), Y.endUniqueValueUpdate(t);
  }
}
const Mt = async (i) => new Promise((t, e) => {
  const s = new Zt();
  s.postMessage({
    type: "init",
    host: i.host,
    id: i.id,
    cdn_url: i.cdn_url,
    tag: i.tag
  }), s.addEventListener("message", async (n) => {
    if (n.data.ok) {
      if (n.data.files) {
        const r = new O(), o = new Ot(
          i.id,
          n.data.target,
          n.data.full_target,
          n.data.code,
          n.data.files.map((h) => new Vt(h.target, h.metadata))
        );
        r.finish(o.pack(r)), bt(
          i.host,
          i.tag != null ? u.Client_Tagged_FrameCache : u.Client_Unique_FrameCache,
          r.asUint8Array()
        );
      }
      t(await import(
        /* @vite-ignore */
        n.data.code
      ));
    } else
      e(n.data.err);
    s.terminate();
  });
}), mt = (i) => {
}, te = (i) => new Uint8Array(i ?? []), xt = (i) => i ? Array.from(i) : Array(), Nt = async ({
  id: i,
  tag: t,
  host: e,
  service: s
}) => {
  const n = await Ut(
    e,
    t != null ? u.Client_Tagged_Value_Request : u.Client_Unique_Value_Request,
    (() => {
      const c = new O(), d = t != null ? new kt(i, t) : new jt(i);
      return c.finish(d.pack(c)), c.asUint8Array();
    })(),
    t != null ? (c, d) => {
      if (c === u.Server_Tagged_Value_Response) {
        const _ = V.getRootAsTaggedValueResponse(
          new L(d)
        );
        if (_.id() === i && t === _.tag())
          return _;
      }
    } : (c, d) => {
      if (c === u.Server_Unique_Value_Response) {
        const _ = A.getRootAsUniqueValueResponse(
          new L(d)
        );
        if (_.id() === i)
          return _;
      }
    }
  ), r = /* @__PURE__ */ new Map();
  let o = !1;
  const h = n.valuesLength();
  for (let c = 0; c < h; ++c) {
    const d = n.values(c), _ = d.id(), F = dt(te(d.unpack().value));
    F.subscribe((m) => {
      if (m == null || o)
        return;
      const I = new O(), B = t != null ? new yt(i, t) : new Pt(i);
      B.value = new At(
        _,
        xt(m)
      ), I.finish(B.pack(I));
      const b = t != null ? u.Tagged_Value_Update : u.Unique_Value_Update;
      s.publish(st([et(b), I.asUint8Array()]));
    }), r.set(_, F);
  }
  return s.on_message((c, d) => {
    const _ = new DataView(d.buffer).getUint32(0, !0), F = d.slice(4), m = t != null ? u.Tagged_Value_Update : u.Unique_Value_Update;
    if (_ === m) {
      const I = t !== null ? N.getRootAsTaggedValueUpdate(new L(F)) : Y.getRootAsUniqueValueUpdate(new L(F));
      if (I.id() === i && (t == null || t === I.tag())) {
        o = !0;
        const B = I.value().id(), b = r.get(B), C = new Uint8Array(I.unpack().value.value), Z = qt(b);
        let ot = !0;
        if (Z == null || C.length != Z.length)
          ot = !1;
        else {
          const Gt = C.length;
          for (let at = 0; at < Gt; at++)
            if (C[at] !== Z[at]) {
              ot = !1;
              break;
            }
        }
        ot || b == null || b.set(C), o = !1;
      }
    }
  }), r;
}, Bt = async ({
  id: i,
  tag: t,
  host: e,
  service: s
}) => {
  const n = await Ut(
    e,
    t != null ? u.Client_Tagged_Signal_Request : u.Client_Unique_Signal_Request,
    (() => {
      const h = new O(), c = t != null ? new Tt(i, t) : new Ct(i);
      return h.finish(c.pack(h)), h.asUint8Array();
    })(),
    (h, c) => {
      if (t != null) {
        if (h === u.Server_Tagged_Signal_Response)
          return U.getRootAsTaggedSignalResponse(new L(c));
      } else if (h === u.Server_Unique_Signal_Response)
        return k.getRootAsUniqueSignalResponse(new L(c));
    }
  ), r = /* @__PURE__ */ new Map(), o = n.signalsLength();
  for (let h = 0; h < o; ++h) {
    const d = n.signals(h).id();
    r.set(d, (_) => {
      const F = new O(), m = xt(_), I = t != null ? new Rt(i, t, d, m) : new Lt(i, d, m);
      F.finish(I.pack(F));
      const B = t != null ? u.Client_Tagged_Signal_Notify : u.Client_Unique_Signal_Notify;
      s.publish(st([et(B), F.asUint8Array()]));
    });
  }
  return r;
}, zt = (i) => ((t, e, s) => {
  if (s == null)
    return i.get(t) ?? dt(e);
  const n = i.get(t);
  if (n != null) {
    let r = qt(n), o = s.decode(r);
    return {
      set: (h) => {
        o = h, r = s.encode(o), n.set(r);
      },
      subscribe: (h) => n.subscribe((c) => {
        c !== r && (r = c, o = s.decode(r)), h(o);
      }),
      update: (h) => {
        n.update((c) => (o = h(o), r = s.encode(o), r));
      }
    };
  }
  return dt(e);
}), Et = (i) => ((t, e) => {
  if (e == null)
    return i.get(t) ?? mt;
  const s = i.get(t);
  return s != null ? (n) => s(e(n)) : mt;
}), ee = async (i, t, e, s, n, r) => {
  await Yt(i);
  const o = new nt(i), [h, c, { nil_xit_fn: d }] = await Promise.all([
    Nt({ id: t, tag: e, host: i, service: o }),
    Bt({ id: t, tag: e, host: i, service: o }),
    Mt({ host: i, cdn_url: s, id: t, tag: e })
  ]), _ = {
    svelte: () => import("./svelte/index.js"),
    "svelte/store": () => import("./svelte/store.js").then((b) => b.cH),
    "svelte/animate": () => import("./svelte/animate.js"),
    "svelte/reactivity": () => import("./svelte/reactivity.js"),
    "svelte/easing": () => import("./svelte/easing.js"),
    "svelte/events": () => import("./svelte/events.js"),
    "svelte/motion": () => import("./svelte/motion.js"),
    "svelte/transition": () => import("./svelte/transition.js"),
    // @ts-ignore
    "svelte/internal/disclose-version": () => import("./svelte/internal/disclose-version.js"),
    // @ts-ignore
    "svelte/internal/client": () => import("./svelte/internal/client.js").then((b) => b.i)
    // "@nil-/xit": () => import("../lib") // serve @nil-/xit as part of bundle
  }, F = (b) => b in _ ? _[b]() : import(
    /* @vite-ignore */
    b
  ), { action: m } = await d(F);
  o.on_connect(() => {
    const b = new O(), C = e != null ? new pt(t, e) : new wt(t);
    b.finish(C.pack(b));
    const Z = e != null ? u.Client_Tagged_Frame_Subscribe : u.Client_Unique_Frame_Subscribe;
    o.publish(st([et(Z), b.asUint8Array()]));
  }), o.start();
  const I = new O(), B = e != null ? new gt(t, e) : new It(t);
  return I.finish(B.pack(I)), bt(
    i,
    e != null ? u.Client_Tagged_Frame_Loaded : u.Client_Unique_Frame_Loaded,
    I.asUint8Array()
  ), (b) => {
    const C = /* @__PURE__ */ new Map();
    C.set("nil.xit", {
      values: zt(h),
      signals: Et(c),
      resub: () => o.start(),
      unsub: () => o.stop(),
      id: t,
      tag: e,
      load_frame_ui: n,
      load_frame_data: r
    });
    const { destroy: Z } = m(b, C);
    return {
      destroy: () => {
        o.stop(), Z();
      }
    };
  };
}, se = async ({
  host: i,
  frame: t,
  tag: e
}) => {
  const s = new nt(i), [n, r] = await Promise.all([
    Nt({ id: t, tag: e ?? null, host: i, service: s }),
    Bt({ id: t, tag: e ?? null, host: i, service: s })
  ]);
  s.on_connect(() => {
    const d = new O(), _ = e != null ? new pt(t, e) : new wt(t);
    d.finish(_.pack(d));
    const F = e != null ? u.Client_Tagged_Frame_Subscribe : u.Client_Unique_Frame_Subscribe;
    s.publish(st([et(F), d.asUint8Array()]));
  }), s.start();
  const o = new O(), h = e != null ? new gt(t, e) : new It(t);
  o.finish(h.pack(o));
  const c = e != null ? u.Client_Tagged_Frame_Loaded : u.Client_Unique_Frame_Loaded;
  return bt(i, c, o.asUint8Array()), {
    values: zt(n),
    signals: Et(r),
    resub: () => s.start(),
    unsub: () => s.stop()
  };
}, Dt = async ({
  host: i,
  cdn_url: t,
  frame: e,
  tag: s
}) => {
  const n = async (r, o) => {
    const h = await Dt({
      host: i,
      cdn_url: t,
      frame: r,
      tag: o
    });
    return (c) => h(c);
  };
  return ee(
    i,
    e,
    s ?? null,
    t,
    async (r, o) => n(r, o),
    async (r, o) => se({ host: i, frame: r, tag: o })
  );
}, ae = async (i, t) => (await Dt(t))(i);
export {
  ae as create_component,
  se as create_frame,
  Dt as create_frame_ui
};
