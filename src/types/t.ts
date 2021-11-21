// function ArrayKey<T extends keyof T>(obj: Array<T>) {
//   // let result: { [key: T]: T } = {};
//   let result = {} as <Exclude<keyof T, null>>;
//   // Exclude<keyof T, K>
//   for (const value of obj) {
//     result[value] = value;
//   }
//   return result;
// }

// // const ageAndExtensions = ArrayKey(["a", "b"]);
// type a<T> = { [P in keyof T]?: T[P] };
// let t = ArrayKey(["a", "b", "c"]);
