import {curry} from './fn';
import {createType} from './typing';
import Functor from './functor';


const Type = class Applicative {};
const mixins = [Functor];

const constructor = (...args) => ({
  // ap :: ff(args -> b) -> fb
  // (<*>) :: f (a -> b) -> f a -> f b
  ap: ff => ff.fmap(f => f(...args)),
});


const staticMethods = {
  ap: (ff, fa) => fa.ap(ff),

  // lift2 :: (a -> b -> c) -> m a -> m b -> m c
  lift: (f, fa, ...fargs) => fargs.reduce(
    (fCurF, fb) => fb.ap(fCurF),
    fa.fmap(curry(f))
  ),
};


export default createType(Type, constructor, mixins, staticMethods);
