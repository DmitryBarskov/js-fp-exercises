import pair from './pair.js';
import nil from './nil.js';

const list = (...args) => {
  if (args.length === 0) return nil;

  let [head, ...tail] = args;
  return pair(head, list(...tail));
};

export default list;
