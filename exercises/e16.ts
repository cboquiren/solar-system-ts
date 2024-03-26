// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<Type>(array: Type[], callback: (elm: Type) => Boolean): Type | undefined {
  const returnArr = [];
  for (let elm of array) {
    if (callback(elm)) {
      returnArr.push(elm);
    }
  }
  return returnArr[0];
}
