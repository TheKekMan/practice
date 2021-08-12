"use strict";

class Math {
  constructor() {
    console.log("class Math");
  }
  sum = (a = 0, b = 0, ...args) => {
    let res = a + b;
    for (let arg of args) {
      res += arg;
    }
    return res;
  };
}

class Child extends Math {
  constructor() {
    super();
    console.log("class Child");
  }
  sum1() {
    console.log("Testing 'super' keyword: " + this.sum(50, 20));
  }
}

let arr = [10, 5, 7];
let math = new Math();
console.log(
  "Testing rest, spread and default parameter: " +
    math.sum(5, 6, 7, 1) +
    " " +
    math.sum(...arr, 5, 10) +
    " " +
    math.sum(5)
);

let child = new Child();
child.sum1();

function* iterate(index) {
  yield 1;
  yield 2;
  yield 3;
}

let iterator = iterate();
for (let value of iterator) {
  console.log(value);
}

let { x: first, y: second, z: third } = { x: 10, y: 20, z: 30 };
console.log(first);
debugger;
console.log(second);
console.log(third);

function logic() {
  let elem = document.getElementById("result2");
  try {
    let a = "test";
    let b = "test";
    if (a == b) {
      elem.innerHTML = "true";
    }
    a = "test1";
    if (a != b) {
      console.log("false");
    }
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

let sum = (a = 0, b = 0, ...args) => {
  let res = a + b;
  for (let arg of args) {
    res += arg;
  }
  return res;
};

let sumStr = (a, b) => {
  console.log(`Concat of ${a} and ${b} is "${a + b}"`);
  console.log('"Escaping"');
  return a + b;
};

window.onload = () => {
  let URLelem = document.getElementById("urltext");
  let URLbutton = document.getElementById("urlbutton");
  let URL = document.location.href;
  URLbutton.addEventListener("click", () => {
    URLelem.innerText = URL;
    alert("Текущий URL: " + URL);
  });

  let gethistory = document.getElementById("gethistory");
  let navhistory = document.getElementById("navhistory");
  let edithistory = document.getElementById("edithistory");
  gethistory.addEventListener("click", () => {
    console.log("Текущая история переходов: " + history.length);
  });
  navhistory.addEventListener("click", () => {
    history.go(-1);
  });
  edithistory.addEventListener("click", () => {
    history.pushState(null, "second", "http://127.0.0.1:5500/script.js");
  });

  let addCookie = document.getElementById("addcookie");
  let getCookie = document.getElementById("getcookie");
  let editCookie = document.getElementById("editcookie");
  getCookie.addEventListener("click", () => {
    console.log("получение всех Cookie: " + document.cookie);
  });
  addCookie.addEventListener("click", () => {
    document.cookie = "User=Asad; max-age=3600" ;
  });
  editCookie.addEventListener("click", () => {
    document.cookie = "User=Anon; max-age=10";
  });

  let addLocal = document.getElementById("addlocal");
  let getLocal = document.getElementById("getlocal");
  let addSession = document.getElementById("addsession");
  let getSession = document.getElementById("getsession");
  addLocal.addEventListener("click", () => {
    localStorage.setItem("User", "Asad");
  });
  getLocal.addEventListener("click", () => {
    console.log(localStorage.getItem("User"));
  });
  addSession.addEventListener("click", () => {
    sessionStorage.setItem("SessionUser", "Session Asad");
  });
  getSession.addEventListener("click", () => {
    console.log(sessionStorage.getItem("SessionUser"));
  });
};
