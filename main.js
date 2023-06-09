fetch('http://localhost:3000/Philosophers')
.then(res => res.json())
.then(data => {

    // Creating variables for the forms on the html page. 

    const form = document.querySelector('form');
    const culture = document.getElementById('cultureSelect');
    const philosopherInput = document.getElementById('pname');
    const submitBtn = document.getElementById('submission');
    const philosopherInfo = document.getElementById('philosopherInfo');
    const body = document.getElementById('body');
    //Disables the Submit button and Philosopher drop-down unless you pick a culture first. 

    culture.addEventListener('change', function(e) {
        if(culture.value === 'Ancient Greece' || culture.value === 'Ancient Egypt' || culture.value === 'Ancient China' || culture.value === 'Ancient India') {
            philosopherInput.disabled = false;
            submitBtn.disabled = false;
            filterPeopleByCulture(culture.value, data);
    } else {
        philosopherInput.disabled = true;
        submitBtn.disabled = true;
        clearPeopleOptions(philosopherInfo);
       
    }
})

            // Grabs the data and filters it, if it matches a philosopher, they will show up.

function filterPeopleByCulture(selectedCulture, philosopherData) {
    const filteredPeople = philosopherData.filter(function(philosopher) {
        return philosopher.culture === selectedCulture;
    });

    clearPeopleOptions(philosopherInput);
    appendPeopleOptions(filteredPeople,philosopherInput);
}

        // Will append the philosopher to the drop-down list options after culture is selected.

function appendPeopleOptions(people,element) {
    people.forEach(function(person) {
        const option = document.createElement('option')
        option.textContent=person.name;
        philosopherInput.add(option);
    });
};

function clearPeopleOptions(element) {
    while(element.firstChild) {
        element.firstChild.remove();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedPhilosopher = philosopherInput.value;
    const selectedPerson = data.find(person => person.name === selectedPhilosopher);

    if(selectedPerson) {
        displayPhilosopherInfo(selectedPerson);
    } else {
        clearPeopleOptions(philosopherInfo)
    };
});

function displayPhilosopherInfo(philosopher) {
    
    const infoContainer = document.createElement('div');
    infoContainer.id = 'personal';

    const heading = document.createElement('h2');
    heading.textContent = philosopher.name;
    heading.id = 'nameOfPhil';
    infoContainer.appendChild(heading);

    const statueContainer = document.createElement('p');
    const statueLabel = document.createElement('strong');
    statueLabel.id = 'statue';
    statueContainer.appendChild(statueLabel);

    const statueImage = document.createElement('img');
    statueImage.src = philosopher.image;
    statueImage.id='statuePicture';
    statueContainer.appendChild(statueImage);
  
    infoContainer.appendChild(statueContainer);

    const quoteContainer = document.createElement('p');
    const quoteLabel = document.createElement('strong');
    quoteLabel.id = 'quote';
    quoteLabel.textContent = 'Famous Quote: ';
    quoteContainer.appendChild(quoteLabel);

    const quoteText = document.createTextNode(philosopher.quote);
    quoteContainer.appendChild(quoteText);
  
    infoContainer.appendChild(quoteContainer);

    const factsContainer = document.createElement('div');
    factsContainer.id = 'facts';
    factsContainer.className = 'bigFacts';

    const createFactParagraph = (factId, factText) => {
        const factParagraph = document.createElement('p');
        const factLabel = document.createElement('strong');
        factLabel.id = factId;
        factLabel.className = 'bigFacts';
        factLabel.textContent = factId + ': ';
        factParagraph.appendChild(factLabel);
        const factTextContent = document.createTextNode(factText);
      factParagraph.appendChild(factTextContent);
  
      return factParagraph;
    };

    factsContainer.appendChild(createFactParagraph('Fact1', philosopher.fact1));
    factsContainer.appendChild(createFactParagraph('Fact2', philosopher.fact2));
    factsContainer.appendChild(createFactParagraph('Fact3', philosopher.fact3));
    factsContainer.appendChild(createFactParagraph('Fact4', philosopher.fact4));
    factsContainer.appendChild(createFactParagraph('Fact5', philosopher.fact5));
  
    infoContainer.appendChild(factsContainer);
  
    philosopherInfo.textContent = '';
    philosopherInfo.appendChild(infoContainer);
  }

};
}
)
