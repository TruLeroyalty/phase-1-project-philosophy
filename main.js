fetch('http://localhost:3000/Philosophers')
.then(res => res.json())
.then(data => {

    // Creating variables for the forms on the html page. 

    const form = document.querySelector('form');
    const culture = document.getElementById('cultureSelect');
    const PhilosopherInput = document.getElementById('pname');
    const submitBtn = document.getElementById('submission');
    const PhilosopherInfo = document.getElementById('philosopherInfo');

})