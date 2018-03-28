import {createType} from './typing';


const Type = class Functor {};
const mixins = [];

/* eslint-disable fp/no-nil, fp/no-throw */
const constructor = (..._args) => ({
  // fmap :: (args -> b) -> fb
  // <$> :: (a -> b) -> fa -> fb
  fmap: _f => { throw new Error('fmap must be implemented'); },
});
/* eslint-enable fp/no-nil, fp/no-throw */


const staticMethods = {
  fmap: (f, fa) => fa.fmap(f),
};


export default createType(Type, constructor, mixins, staticMethods);
