const defaultInstanceMethods = (val, instanceConstructor) => ({
  bind: fn => fn(val),
  sbind: fn => fn(),
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
  compose: (ma, fn) => ma.compose(fn),
  join: (ma, fn) => ma.join(fn)
});

export const monadenize = (type, instanceConstructor, typeMethods = {}) =>
  Object.assign(
    val => Object.assign(
      type,
      defaultInstanceMethods(val, instanceConstructor),
      instanceConstructor(val),
      monadInstanceMethods(instanceConstructor(val))
    ),
    Object.assign({}, defaultTypeMethods, typeMethods));

export default monadenize;
