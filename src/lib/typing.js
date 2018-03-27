export const createType =
  (
    Type,
    constructor = () => ({}),
    mixins = [],
    staticMethods = {
      pure: constructor,
    }
  ) =>
    Object.assign(
      (...args) => Object.assign(
        new Type(),
        ...mixins.map(mixin => mixin(...args)),
        constructor(...args),
      ),
      Object.assign(
        mixins.reduce(
          (prefixMethods, mixin) => Object.assign({}, prefixMethods, mixin),
          {}
        ),
        staticMethods,
      )
    );


export const addStaticMethods = (Type, staticMethods) =>
  Object.assign(
    Type,
    {
      pure: Type,
    },
    staticMethods,
  );
