import Monad from './monad';
import monadenize from './monadenize';


const type = class Identity extends Monad {};

const instanceConstructor = val => ({
  fmap: fn => Identity(fn(val)),
  toString: () => val
});

const Identity = monadenize(type, instanceConstructor);

export default Identity;
