import {createType} from './typing';
import Monad from './monad';
import {liftWith} from './typesFn';


const Type = class Identity {};
const mixins = [Monad];

const constructor = a => ({
  fmap: f => Identity(f(a)),
  lift: liftWith(Identity, a),

  toString: () => `Identity ${a}`,
});


const Identity = createType(Type, constructor, mixins);


export default Identity;
