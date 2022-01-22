import { head, tail, pair, empty } from "../lib";

const map = (f, list) => {
  if (empty(list)) {
    return list;
  }

  return pair(f(head(list)), map(f, tail(list)));
};

export default map;
