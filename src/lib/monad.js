import createType, {addPrefixNotationMethods} from './typing';
import Applicative from './applicative';


const type = class Monad {};
const mixins = [Applicative];

const instanceMethods = (...args) => ({
  bind: fn => fn(...args),
  seq: fn => fn(),

//  is implied that args = [ma], and join:: calling on m(ma), so join :: m(m a) = m a
//  it could have type checking like
//  (args.length === 1 && args[0].bind) ?
//      args[0].bind(a => a.constructor.name === args[0].constructor.name ? a : new Error('types error')) : new Error('types error');
  join: () => args[0],

//  fail: message => new Error(str),
});

const MonadInstance = createType(type, mixins, instanceMethods);

const prefixNotationMethods = {
  pure: MonadInstance,

  bind: (ma, fn) => ma.bind(fn),
  seq: (ma, fn) => ma.seq(fn),
  join: mma => mma.join(),
//  fail: (ma, str) => ma.fail(str),
};


export const Monad = addPrefixNotationMethods(MonadInstance, prefixNotationMethods);


export default Monad;
