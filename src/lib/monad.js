import {createType} from './typing';
import Applicative from './applicative';


const Type = class Monad {};
const mixins = [Applicative];

const constructor = (...args) => ({
  // bind :: (args -> mb) -> mb
  // (>>=) :: ma -> (a -> mb) -> mb
  bind: f => f(...args),
  // seq :: (() -> ma) -> ma
  // mv1 >> mv2 = mv1 >>= (\_ -> mv2)
  seq: f => f(),
  // compose :: args -> mb, b -> mc, ..., d -> me) -> me)
  compose: (f, ...fns) => fns.reduce(
    (mb, g) => mb.bind(g),
    f(...args)
  ),

  // join :: () -> ma
  // is implied that args = [ma], and join is calling on m(ma), so join :: m(m a) -> m a
  // maybe it could have type checking in future, for example
  // (args.length === 1 && args[0].bind) ?
  //   args[0].bind(a => a.constructor.name === args[0].constructor.name ?
  //   a : new Error('types error')) : new Error('types error');
  join: () => args[0],
});


const staticMethods = {
  bind: (ma, f) => ma.bind(f),
  seq: (ma, f) => ma.seq(f),
  join: mma => mma.join(),
};


export default createType(Type, constructor, mixins, staticMethods);
