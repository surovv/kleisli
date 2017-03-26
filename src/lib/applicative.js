import Functor from './functor';

export default class Applicative extends Functor {
  apply(ffn) { throw new Error('apply must be implemented') }
}
