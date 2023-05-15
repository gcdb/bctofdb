const VAL_SQUAD = 'VAL_SQUAD';
const VAL_RARITY = 'VAL_RARITY';
const VAL_TYPE = 'VAL_TYPE';

function translateDropdownType(dropdownType) {
    let dropdownId, inputId;
    switch (dropdownType) {
        case VAL_SQUAD: 
            dropdownId = 'squadDropdown';
            inputId = 'squadInput';
            break;

        case VAL_RARITY:
            dropdownId = 'rarityDropdown';
            inputId = 'rarityInput';
            break;

        case VAL_TYPE:
            dropdownId = 'typeDropdown';
            inputId = 'typeInput';
            break;
    }

    return [dropdownId, inputId];
}

function filterDropdown(dropdownType) {
    let [dropdownId, inputId] = translateDropdownType(dropdownType);

    let dropdown = document.getElementById(dropdownId);
    let value = document.getElementById(inputId).value;
    value = DOMPurify.sanitize(value);

    let shownItems = dropdown.querySelectorAll(value ? `li[data-value*="${value}" i]` : 'li');
    let hiddenItems = dropdown.querySelectorAll(value ? `li:not([data-value*="${value}" i])` : 'invalid-selector-i-just-want-an-empty-nodelist-ty-no-judge-plz');

    shownItems.forEach(x => x.classList.remove('d-none'));
    hiddenItems.forEach(x => x.classList.add('d-none'));
}

function clearFilter(dropdownType) {
    let [dropdownId, inputId] = translateDropdownType(dropdownType);

    document.getElementById(inputId).value = '';
    let dropdown = document.getElementById(dropdownId);
    dropdown.querySelectorAll('li').forEach(x => x.classList.remove('d-none'));
}