import {curry} from './fn';

export const liftWith = (TypeConstructor, a) => (f, ...fargs) => fargs.reduce(
  (fCurF, fa) => fa.ap(fCurF),
  TypeConstructor(curry(f)(a))
);

// mapply :: (ma, a -> mb) -> m c
export const mapply = (ma, f) => ma.bind(f);

// mcompose :: (a -> mb, b -> mc) -> a -> mc
// f >=> g = \x -> (f x >>= g)
export const mcompose = (...fns) => fns.reduce(
  (f, g) => (...args) => f(...args).bind(g)
);
