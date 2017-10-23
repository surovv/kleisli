export const createType = (type, mixins = [], instanceMethods = () => ({}), prefixNotationMethods = {}) => Object.assign(
  (...args) => Object.assign(
    new type,
    ...mixins.map(mixin => mixin(...args)),
    instanceMethods(...args),
  ),
  prefixNotationMethods,
);



export default createType;
