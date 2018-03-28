import {createType, addStaticMethods} from './typing';
import Monad from './monad';


const type = class Reader {};
const mixins = [Monad];


const constructor = f => ({
  run: env => f(env),

  fmap: g => Reader(env => g(f(env))),
  bind: g => Reader(env => g(f(env)).run(env)),
});

const Reader = createType(type, constructor, mixins);


const staticMethods = {
  pure: x => Reader(_ => x),

  fmap: (f, ma) => ma.fmap(f),
  run: (ma, env) => ma.run(env),
};


export default addStaticMethods(Reader, staticMethods);
