import crypto from 'crypto';

export default function () {
  return crypto.randomBytes(4).toString('HEX');
}
