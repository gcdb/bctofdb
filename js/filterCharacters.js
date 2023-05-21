function filterCharacters() {
    let filters = {
        name: null,
        squad: null,
        rarity: null,
        type: null
    }

    let rawNameVal = document.getElementById("nameInput").value.toLowerCase();
    if (rawNameVal) filters.name = DOMPurify.sanitize(rawNameVal);

    let rawSquadVal = document.getElementById("squadSelect").value;
    if (rawSquadVal) filters.squad = DOMPurify.sanitize(rawSquadVal);
    
    let checkedRarity = document.querySelector("input[name=rarityRadio]:checked");
    if (checkedRarity) filters.rarity = checkedRarity.value;

    let checkedType = document.querySelector("input[name=typeRadio]:checked");
    if (checkedType) filters.type = checkedType.value;
    
    let cardDiv = document.getElementById('char-cardDiv');

    let shownCards, hiddenCards;
    if (!filters.name && !filters.squad && !filters.rarity && !filters.type) {
        shownCards = cardDiv.querySelectorAll('.char-card');
        hiddenCards = cardDiv.querySelectorAll('#invalid-selector-i-just-want-an-empty-nodelist-ty-no-judge-plz');
    } else {
        shownQuery = '.char-card';
        hiddenQuery = '.char-card:not(';

        Object.entries(filters).forEach(x => {
            let [k, v] = x;
            if (!v) return;

            subquery = `[data-${k}${k === 'name' ? '*' : ''}=${v}]`
            shownQuery += subquery
            hiddenQuery += subquery
        })
        hiddenQuery += ')';

        shownCards = cardDiv.querySelectorAll(shownQuery);
        hiddenCards = cardDiv.querySelectorAll(hiddenQuery);
    }
    
    shownCards.forEach(x => x.classList.remove('d-none'));
    hiddenCards.forEach(x => x.classList.add('d-none'));
}

function clearFields() {
    document.getElementById("nameInput").value = "";
    $('input[name=rarityRadio]').prop('checked', false);
    $('input[name=typeRadio]').prop('checked', false);
    document.getElementById("squadSelect").selectize.clear();
    
    filterCharacters();
}