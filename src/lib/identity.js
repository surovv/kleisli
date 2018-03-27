import {createType} from './typing';
import Monad from './monad';


const Type = class Identity {};
const mixins = [Monad];

const instanceMethods = a => ({
  fmap: f => Identity(f(a)),

  toString: () => `Identity ${a}`,
});


const Identity = createType(Type, mixins, instanceMethods);


export default Identity;
