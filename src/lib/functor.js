import createType, {addPrefixNotationMethods} from './typing';


const type = class Functor {};
const mixins = [];

const instanceMethods = (...args) => ({
  fmap: fn => { throw new Error('fmap must be implemented'); },
});

const FunctorInstance = createType(type, mixins, instanceMethods)

const prefixNotationMethods = {
  unit: FunctorInstance,

  fmap: (fn, fa) => fa.fmap(fn)
};


export const Functor = addPrefixNotationMethods(FunctorInstance, prefixNotationMethods);



export default Functor;
