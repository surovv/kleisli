export const flip = (fn, args) => fn([...args].reverse());

export const compose = fns => fns.reduce((f,g) => args => f(g(...args)));
export const composeLeft = fns => flip(compose, fns);

export const apply = (fn, args) => fn(...args);
