// Get character name from URL
const charName = window.location.pathname.match(new RegExp(`\/${PROFILES_DIRNAME}\/(.*)(?=\.html)`))[1];

$.getJSON(`/${BASE_DIR}/js/charData.json`, (data) => {
    let c = data[charName];
    let p = c.profileData;

    // Images
    $('#portrait-image').attr('src', `/${BASE_DIR}/img/characters/UI_Portrait_H_Illust_${charName}_01.png`);
    $('#grimoire-image').attr('src', `/${BASE_DIR}/img/equips/private_grimoire_sr_${charName}_01_item.png`)
    $('#atk01').attr('src', `/${BASE_DIR}/img/skills/UI_${charName}_01_atk_01.png`);
    $('#skill01').attr('src', `/${BASE_DIR}/img/skills/UI_${charName}_01_skill_01.png`);
    $('#special01').attr('src', `/${BASE_DIR}/img/skills/UI_${charName}_01_special_01.png`);

    // Tags
    $('#tag-squad p').text(c.squad);
    $('#tag-rarity p').text(c.rarity.toUpperCase());
    $('#tag-type p').text(c.type.charAt(0).toUpperCase() + c.type.slice(1));

    // Names
    $('#grimoire-name').text(p.grimoireName);
    $('#passive-name').text(p.passiveName);
    $('#atk-name').text(p.atkName);
    $('#skill-name').text(p.skillName);
    $('#special-name').text(p.specialName);
});