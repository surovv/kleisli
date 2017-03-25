import Monad from './monad';
import monadenize from './monadenize';


const maybeType = class Maybe extends Monad {};
const maybeTypeConstructor = val => val ? Just(val) : Nothing();

const Maybe = monadenize(maybeType, maybeTypeConstructor);
export default Maybe;


const justType = class Just extends maybeType {};
const justConstructor = val => ({
  fmap: fn => Maybe(fn(val)),
  toString: () => `Just ${val}`
});

export const Just = monadenize(justType, justConstructor)


const nothingType = class Nothing extends maybeType {};
const nothingConstructor = _ => ({
  toString: () => 'Nothing',
  fmap: _ => Nothing()
});

export const Nothing = monadenize(nothingType, nothingConstructor);
