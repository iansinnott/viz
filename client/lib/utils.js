import { emojify } from 'react-emoji';

// Wrap emojify function for convenience. Use strict since not passing user
// input. This can help for dev.
export const moji = str => emojify(str, { strict: true, emojiType: 'emojione' });

