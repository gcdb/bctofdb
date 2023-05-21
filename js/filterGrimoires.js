function filterGrimoires() {
    let filters = {
        name: null,
        character: null,
        rarity: null,
        type: null
    }

    let rawGrimoireVal = document.getElementById("grimoireNameInput").value.toLowerCase();
    if (rawGrimoireVal) filters.name = DOMPurify.sanitize(rawGrimoireVal);

    let rawCharVal = document.getElementById("charNameInput").value;
    if (rawCharVal) filters.character = DOMPurify.sanitize(rawCharVal);
    
    let checkedRarity = document.querySelector("input[name=rarityRadio]:checked");
    if (checkedRarity) filters.rarity = checkedRarity.value;

    let checkedType = document.querySelector("input[name=typeRadio]:checked");
    if (checkedType) filters.type = checkedType.value;
    
    let cardDiv = document.getElementById('char-cardDiv');

    let shownCards, hiddenCards;
    if (!filters.name && !filters.character && !filters.rarity && !filters.type) {
        shownCards = cardDiv.querySelectorAll('.char-card');
        hiddenCards = cardDiv.querySelectorAll('#invalid-selector-i-just-want-an-empty-nodelist-ty-no-judge-plz');
    } else {
        shownQuery = '.char-card';
        hiddenQuery = '.char-card:not(';

        Object.entries(filters).forEach(x => {
            let [k, v] = x;
            if (!v) return;

            subquery = `[data-${k}${k === 'name' || k === 'character' ? '*' : ''}=${v}]`
            shownQuery += subquery
            hiddenQuery += subquery
        })
        hiddenQuery += ')';

        console.log(shownQuery)

        shownCards = cardDiv.querySelectorAll(shownQuery);
        hiddenCards = cardDiv.querySelectorAll(hiddenQuery);
    }
    
    shownCards.forEach(x => x.classList.remove('d-none'));
    hiddenCards.forEach(x => x.classList.add('d-none'));
}

function clearFields() {
    document.getElementById("grimoireNameInput").value = "";
    document.getElementById("charNameInput").value = "";
    $('input[name=rarityRadio]').prop('checked', false);
    $('input[name=typeRadio]').prop('checked', false);
    
    filterGrimoires();
}