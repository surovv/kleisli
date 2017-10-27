import createType, {addPrefixNotationMethods} from './typing';
import Functor from './functor';


const type = class Applicative {};
const mixins = [Functor];

const instanceMethods = (...args) => ({
  ap: ffn => ffn.fmap(fn => fn(...args)), //apply
  lift: (fn, ...fargs) => fargs.reduce((fCrrdFn, fb) => fb.apply(fCrrdFn), curry(fn)(...args)),
});

const ApplicativeInstance = createType(type, mixins, instanceMethods);


const prefixNotationMethods = {
  pure: ApplicativeInstance,

  ap: (ffn, fa) => fa.ap(ffn),
  lift: (fn, fa, ...fargs) => fa.lift(fn, ...fargs),
};


export const Applicative = addPrefixNotationMethods(ApplicativeInstance, prefixNotationMethods);



export default Applicative;
