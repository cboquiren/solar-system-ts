export const minBy = <T>(array: T[], cb: (elm: T) => string | number) => {
  let minimum = array[0] as T;
  for (let elm of array) {
    if (cb(elm) < cb(minimum)) {
      minimum = elm;
    }
  }
  return minimum;
};

export function maxBy<T>(array: T[], cb: (elm: T) => string | number) {
  let maximum = array[0] as T;
  for (let elm of array) {
    if (cb(elm) > cb(maximum)) {
      maximum = elm;
    }
  }

  return maximum;
}



