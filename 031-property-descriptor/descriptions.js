var object = {
    number: 1
};

var description = Object.getOwnPropertyDescriptor(object, "number");
console.log(description);

/*
{
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
}
*/