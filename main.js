fetch('http://localhost:3000/Philosophers')
.then(res => res.json())
.then(data => {

    // Creating variables for the forms on the html page. 

    const form = document.querySelector('form');
    const culture = document.getElementById('cultureSelect');
    const philosopherInput = document.getElementById('pname');
    const submitBtn = document.getElementById('submission');
    const PhilosopherInfo = document.getElementById('philosopherInfo');

    //Disables the Submit button and Philosopher drop-down unless you pick a culture first. 

    culture.addEventListener('change', function(e) {
        if(culture.value === 'Ancient Greece' || culture.value === 'Ancient Egypt' || culture.value === 'Ancient China' || culture.value === 'Ancient India') {
            philosopherInput.disabled = false;
            submitBtn.disabled = false;
            filterPeopleByCulture(culture.value, data);
    } else {
        philosopherInput.disabled = true;
        submitBtn.disabled = true;
       
    }
})

            // Grabs the data and filters it, if it matches a philosopher, they will show up.

function filterPeopleByCulture(selectedCulture, philosopherData) {
    const filteredPeople = philosopherData.filter(function(philosopher) {
        return philosopher.culture === selectedCulture;
    });

    clearPeopleOptions();
    appendPeopleOptions(filteredPeople);
}

        // Will append the philosopher to the drop-down list options after culture is selected.

function appendPeopleOptions(people) {
    people.forEach(function(person) {
        const option = document.createElement('option')
        option.text=person.name;
        philosopherInput.add(option);
    });
};

function clearPeopleOptions() {
    philosopherInput.innerHTML = "";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedPhilosopher = philosopherInput.value;
    const selectedPerson = data.find(person => person.name === selectedPhilosopher);
});

function displayPhilosopherInfo(philosopher) {
    const info =`
    <div id="personal">
    <h2>${philosopher.name}</h2>
</div>
;`
}


});

