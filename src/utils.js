// WebCrypto Encryption API: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt

export const encryptText = async function(plainText, password) {
  const ptUtf8 = new TextEncoder().encode(plainText);
  const pwUtf8 = new TextEncoder().encode(password);
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8); 
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const alg = { name: 'AES-GCM', iv: iv };
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);
  return { iv, encBuffer: await crypto.subtle.encrypt(alg, key, ptUtf8) };
};

export const decryptText = async function(ctBuffer, iv, password) {
  const pwUtf8 = new TextEncoder().encode(password);
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
  const alg = { name: 'AES-GCM', iv: iv };
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);
  const ptBuffer = await crypto.subtle.decrypt(alg, key, ctBuffer);
  const plaintext = new TextDecoder().decode(ptBuffer);
  return plaintext;
};

// Conversion methods for array buffers to Swarm storable strings: https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String 
// TODO: Investigate if this is too limited

export const ab2str = function(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
};

export const str2ab = function(str) {
  const buf = new ArrayBuffer(str.length);
  let bufView = new Uint8Array(buf);
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};
  