import {curry} from './fn';

const defaultInstanceMethods = (val, instanceConstructor, ma = instanceConstructor(val)) => ({
  bind: fn => fn(val),
  sbind: fn => fn(),
  apply: ffn => ffn.fmap(fn => fn(val)),
  join: () => ma.fmap(x => x).constructor.name == val.constructor.name ? val : ma
//  id
})

const monadInstanceMethods = ma => ({
  compose: fns => fns.reduce((mb, fn) => mb.bind(fn), ma)
});

const defaultTypeMethods = instanceConstructor => ({
  unit: arg => instanceConstructor(arg),

  fmap: (ma, fn) => ma.fmap(fn),
  bind: (ma, fn) => ma.bind(fn),
  sbind: (ma, fn) => ma.sbind(fn),
  compose: (ma, fns) => ma.compose(fns),
  lift: fn => (ma, ...mArgs) => mArgs.reduce((mCrrdFn, mb) => mb.apply(mCrrdFn), ma.fmap(x => curry(fn)(x))),
  join: ma => ma.join()
});

export const monadenize = (type, instanceConstructor, typeMethods = {}) =>
  Object.assign(
    val => Object.assign(
      new type,
      defaultInstanceMethods(val, instanceConstructor),
      instanceConstructor(val),
      monadInstanceMethods(instanceConstructor(val))
    ),
    Object.assign(defaultTypeMethods(instanceConstructor), typeMethods));

export default monadenize;
