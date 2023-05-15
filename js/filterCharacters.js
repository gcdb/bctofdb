function filterCharacters() {
    let nameVal = document.getElementById("nameInput").value.toLowerCase();
    nameVal = DOMPurify.sanitize(nameVal);

    let squadVal = document.getElementById("squadInput");
    
    let rarityVal = document.getElementById("rarityInput");
    console.log(rarityVal);

    let typeVal = document.getElementById("typeInput");
    

    let cardDiv = document.getElementById('char-cardDiv');
    let shownCards = cardDiv.querySelectorAll(nameVal ? `.char-card[data-cardname*="${nameVal}"]` : '.char-card');
    let hiddenCards = cardDiv.querySelectorAll(nameVal ? `.char-card:not([data-cardname*="${nameVal}"])` : 'invalid-selector-i-just-want-an-empty-nodelist-ty-no-judge-plz');

    shownCards.forEach(x => x.classList.remove('d-none'));
    hiddenCards.forEach(x => x.classList.add('d-none'));

    console.log(shownCards);
    console.log(hiddenCards);
}