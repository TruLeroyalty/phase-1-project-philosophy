fetch('http://localhost:3000/Philosophers')
.then(res => res.json())
.then(data => {

    // Creating variables for the forms on the html page. 

    const form = document.querySelector('form');
    const culture = document.getElementById('cultureSelect');
    const PhilosopherInput = document.getElementById('pname');
    const submitBtn = document.getElementById('submission');
    const PhilosopherInfo = document.getElementById('philosopherInfo');

    culture.addEventListener('change', function(e) {
        if(culture.value === 'Ancient Greece' || culture.value === 'Ancient Egypt' || culture.value === 'Ancient China' || culture.value === 'Ancient India') {
            PhilosopherInput.disabled = false;
            submitBtn.disabled = false;
    } else {
        PhilosopherInput.disabled = true;
        submitBtn.disabled = true;
    }
})
})