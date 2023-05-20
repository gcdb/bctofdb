let cardDiv = $('#char-cardDiv');

$.getJSON(`/${BASE_DIR}/js/charData.json`, (data) => {
    Object.entries(data).forEach(char => {
        let profilePath = char[0];
        let c = char[1];

        let charCard = document.createElement('div');
        charCard.classList.add('char-card', 'pb-3')
        charCard.dataset.name = c.name.toLowerCase();
        charCard.dataset.squad = c.squad.toLowerCase().replaceAll(' ', '-');
        charCard.dataset.rarity = c.rarity.toLowerCase();
        charCard.dataset.type = c.type.toLowerCase();

        let charCardContainer = document.createElement('div');
        charCardContainer.classList.add('char-cardContainer');

        let a = document.createElement('a');
        a.href = `/${BASE_DIR}/${PROFILES_DIRNAME}/${profilePath}.html`;

        let img = document.createElement('img');
        img.classList.add('char-portrait', 'bg-dark', 'rounded');
        img.src = `/${BASE_DIR}/img/characters/UI_Portrait_H_S_${c.imgPath ? c.imgPath : c.name}_01.png`;
        img.loading = 'lazy';
        img.alt = c.name;

        let charTitle = document.createElement('div');
        charTitle.classList.add('char-title', 'bg-body', 'px-1');
        charTitle.textContent = c.name.charAt(0).toUpperCase() + c.name.slice(1);

        a.append(img);
        a.append(charTitle);
        charCardContainer.append(a);
        charCard.append(charCardContainer);
        cardDiv.append(charCard);

        if (c.new) {
            let charBadge = document.createElement('span');
            charBadge.classList.add('badge', 'char-badge', 'w-100');
            charBadge.textContent = 'NEW';
            a.append(charBadge);
        }
    })
})
