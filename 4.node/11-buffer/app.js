// Fixed-size chunk of memory
// array of integer, byte of data

const buf = Buffer.from('Hi');  // 문자열을 uniCode 로 decoding 하여 보여줌
console.log(buf);
console.log(buf.length);
console.log(buf.toString()); // unicode 를 encoding 하여 보여줌
