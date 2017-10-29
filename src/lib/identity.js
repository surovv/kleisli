import createType, {addPrefixNotationMethods} from './typing';
import Monad from './monad';


const type = class Identity {};
const mixins = [Monad];

const instanceMethods = a => ({
  fmap: fn => IdentityInstance(fn(a)),

  toString: () => `Identity ${a}`,
});

const IdentityInstance = createType(type, mixins, instanceMethods);

const prefixNotationMethods = {
  pure: IdentityInstance,

  fmap: (fn, ma) => ma.fmap(fn)
};


export const Identity = addPrefixNotationMethods(IdentityInstance, prefixNotationMethods);



export default Identity;
