"use strict";
/**
 * Creates a single interface around the Crypto API (IE 11 requires a `ms` prefix)
 *
 * For current browser support please refer to: https://caniuse.com/#search=crypto
 */
Object.defineProperty(exports, "__esModule", { value: true });
var getRandomValuesInterface = (typeof crypto !== 'undefined' &&
    crypto.getRandomValues &&
    crypto.getRandomValues.bind(crypto)) ||
    // @ts-ignore msCrypto does not have a type entry but is valid in IE 11
    (typeof msCrypto !== 'undefined' &&
        // @ts-ignore msCrypto does not have a type entry but is valid in IE 11
        typeof window.msCrypto.getRandomValues === 'function' &&
        // @ts-ignore msCrypto does not have a type entry but is valid in IE 11
        msCrypto.getRandomValues.bind(msCrypto));
/**
 * Get a 16 random byte values array either using the Crypto API or the Math.random() fallback
 */
exports.getRandomValues = function () {
    if (getRandomValuesInterface) {
        var data = new Uint8Array(16);
        getRandomValuesInterface(data);
        return data;
    }
    else {
        var data = new Array(16);
        var r = 0;
        for (var i = 0; i < 16; i++) {
            if ((i & 0x03) === 0) {
                r = Math.random() * 0x100000000;
            }
            data[i] = (r >>> ((i & 0x03) << 3)) & 0xff;
        }
        return data;
    }
};
/**
 * Compute byte to hexadecimal array
 */
exports.hex = [];
for (var i = 0; i < 256; i++) {
    exports.hex[i] = (i + 0x100).toString(16).substr(1);
}
/**
 * Create a 32 character RFC-compliant V4 unique identifier
 *
 * https://www.ietf.org/rfc/rfc4122.txt
 */
exports.createUUID = function () {
    var r = exports.getRandomValues();
    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */
    // Per V4.4, set bits for version and `clock_seq_hi_and_reserved`
    r[6] = (r[6] & 0x0f) | 0x40;
    r[8] = (r[8] & 0x3f) | 0x80;
    // Possibly necessary to work out a memory issue in Chrome and Node
    // https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    // return [
    //   hex[r[0]],
    //   hex[r[1]],
    //   hex[r[2]],
    //   hex[r[3]],
    //   '-',
    //   hex[r[4]],
    //   hex[r[5]],
    //   '-',
    //   hex[r[6]],
    //   hex[r[7]],
    //   '-',
    //   hex[r[8]],
    //   hex[r[9]],
    //   '-',
    //   hex[r[10]],
    //   hex[r[11]],
    //   hex[r[12]],
    //   hex[r[13]],
    //   hex[r[14]],
    //   hex[r[15]],
    // ].join('');
    return (exports.hex[r[0]] +
        exports.hex[r[1]] +
        exports.hex[r[2]] +
        exports.hex[r[3]] +
        '-' +
        exports.hex[r[4]] +
        exports.hex[r[5]] +
        '-' +
        exports.hex[r[6]] +
        exports.hex[r[7]] +
        '-' +
        exports.hex[r[8]] +
        exports.hex[r[9]] +
        '-' +
        exports.hex[r[10]] +
        exports.hex[r[11]] +
        exports.hex[r[12]] +
        exports.hex[r[13]] +
        exports.hex[r[14]] +
        exports.hex[r[15]]);
};
//# sourceMappingURL=createUUID.js.map