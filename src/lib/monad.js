import Functor from './functor';

export default class Monad extends Functor{
  bind(fn) { throw new Error('bind must be implemented') }
  sbind(fn) { throw new Error('sbind must be implemented') }
  compose(fn) { throw new Error('compose must be implemented') }
  join(val){ throw new Error('join must be implemented') }
  fail(str){ throw new Error('fail must be implemented') }
}
