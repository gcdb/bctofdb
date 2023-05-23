$.getJSON('../js/json/tooltipData.json', (tooltipData) => {
    $('.dtt-indicator').each((idx, elem) => {
        var tag = [...elem.classList].find(x => x.startsWith('dtt-') && x !== 'dtt-indicator');
        tag = tag.split('-')[1];
    
        elem.dataset.bsToggle = 'tooltip';
        elem.dataset.bsPlacement = 'top';
        elem.dataset.bsCustomClass = 'tooltip-dark';
        elem.dataset.bsTitle = tooltipData[tag];
    });
});

