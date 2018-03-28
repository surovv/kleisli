/* eslint-disable fp/no-mutating-methods */
// flip :: (* -> d) -> * -> d
// flip :: ((a, b, c) -> d) -> (c, b, a) -> d
export const flip = fn => (...args) => fn([...args].reverse());
/* eslint-enable fp/no-mutating-methods */

// compose :: (c -> d, ..., a -> b) -> a -> d
// (.) :: (b -> c) -> (a -> b) -> (a -> c)
export const compose = (...fns) => fns.reduce(
  (g, f) => (...args) => g(f(...args))
);
// composeLeft :: (a -> b, ..., c -> d) -> a -> d
// (>.>) :: (a -> b) -> (b -> c) -> (a -> c)
export const composeLeft = flip(compose);

// apply :: (a -> b, [a]) -> b
// ($) :: (a -> b) -> a -> b
export const apply = (fn, args) => fn(...args);

// curry :: ((a, ..., c) -> d) -> (a -> ... -> c -> d)
export const curry = (fn, ...args) => args.length === fn.length ?
  fn(...args) :
  (...nextArgs) => curry(fn, ...args, ...nextArgs);

// later :: (a -> b, ..., c -> d) -> a -> () -> d
export const later = (...fns) => args => () => composeLeft(fns)(args);
