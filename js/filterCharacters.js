function filterCharacters() {
    let value = document.getElementById("searchInput").value.toLowerCase();
    value = DOMPurify.sanitize(value);
    console.log(value);

    let shownCards = document.querySelectorAll(value ? `.char-card[data-cardname*="${value}"]` : '.char-card');
    let hiddenCards = document.querySelectorAll(value ? `.char-card:not([data-cardname*="${value}"])` : 'invalid-selector-i-just-want-an-empty-nodelist-ty-no-judge-plz');

    shownCards.forEach(x => x.classList.remove('d-none'));
    hiddenCards.forEach(x => x.classList.add('d-none'));

    console.log(shownCards);
    console.log(hiddenCards);
}