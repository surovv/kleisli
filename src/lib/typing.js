export const createType =
  (
    Type,
    mixins = [],
    instanceMethods = () => ({}),
    prefixNotationMethods = {
      pure: instanceMethods,
    }
  ) =>
    Object.assign(
      (...args) => Object.assign(
        new Type(),
        ...mixins.map(mixin => mixin(...args)),
        instanceMethods(...args),
      ),
      Object.assign(
        mixins.reduce(
          (prefixMethods, mixin) => Object.assign({}, prefixMethods, mixin),
          {}
        ),
        prefixNotationMethods,
      )
    );


export const addPrefixNotationMethods = (Type, prefixNotationMethods) =>
  Object.assign(
    Type,
    {
      pure: Type,
    },
    prefixNotationMethods,
  );
