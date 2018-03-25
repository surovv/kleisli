/* eslint-disable fp/no-mutating-methods */
export const flip = (fn, args) => fn([...args].reverse());
/* eslint-enable fp/no-mutating-methods */

// call fns from last to first
export const compose = fns => fns.reduce((g, f) => (...args) => g(f(...args)));
export const composeLeft = fns => flip(compose, fns);

export const apply = (fn, args) => fn(...args);

export const curry = (fn, ...args) => args.length === fn.length ?
  fn(...args) :
  (...nextArgs) => curry(fn, ...args, ...nextArgs);

export const later = fns => args => () => compose(fns)(args);
