import {curry} from './fn';
import {createType} from './typing';
import Functor from './functor';


const Type = class Applicative {};
const mixins = [Functor];

const instanceMethods = (...args) => ({
  ap: ff => ff.fmap(f => f(...args)), /* Applicative::apply <*> */
  lift: (f, ...fargs) => fargs.reduce(
    (curF, fa) => fa.fmap(curF),
    curry(f)(...args)
  ),
});


const staticMethods = {
  ap: (ff, fa) => fa.ap(ff),
  lift: (f, fa, ...fargs) => fa.lift(f, ...fargs),
};


export default createType(Type, mixins, instanceMethods, staticMethods);
