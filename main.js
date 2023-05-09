console.log('hello world');

fetch('http://localhost:3000/Philosophers').then((res) => res.json()).then(json => console.log(json))