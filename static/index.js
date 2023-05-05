const firstCard = document.querySelector('.card[data-index="1"]');
const group = document.querySelector('.card-group');

firstCard.addEventListener('click', function() {
    if (group.getAttribute('data-active') === 'active') {
        group.setAttribute('data-active', 'not-active');
    }
    else{
        group.setAttribute('data-active', 'active');
    }
});

const domainName = document.location.hostname;
const domain = domainName.split('.')[0];
