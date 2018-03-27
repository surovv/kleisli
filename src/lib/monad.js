import {createType} from './typing';
import Applicative from './applicative';


const Type = class Monad {};
const mixins = [Applicative];

const constructor = (...args) => ({
  bind: f => f(...args),
  seq: f => f(),

  //  is implied that args = [ma], and join:: calling on m(ma), so join :: m(m a) -> m a
  //  it could have type checking like
  //  (args.length === 1 && args[0].bind) ?
  //      args[0].bind(a => a.constructor.name === args[0].constructor.name ?
  //      a : new Error('types error')) : new Error('types error');
  join: () => args[0],

//  fail: message => new Error(str),
});


const staticMethods = {
  bind: (ma, f) => ma.bind(f),
  seq: (ma, f) => ma.seq(f),
  join: mma => mma.join(),
  //  fail: (ma, str) => ma.fail(str),
};


export default createType(Type, constructor, mixins, staticMethods);
