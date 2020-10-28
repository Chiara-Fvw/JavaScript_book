let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

//snippet 1
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

//snippet 2

for (let key in myObj) {
  console.log(key);
}

//no, s1 only qux while s2 foo, bar and qux