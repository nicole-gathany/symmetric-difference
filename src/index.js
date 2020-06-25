function sym() {
  let args = [...arguments];
  let howManyArgs = args.length;
  console.log(howManyArgs);
  return args;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
