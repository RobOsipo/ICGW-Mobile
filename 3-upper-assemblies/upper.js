
// jQuery for Hero Section 

$('a.company-name').hide();
$('p.hero-text').hide();

setTimeout(() => {
    $('a.company-name').fadeIn();
}, 500)

setTimeout(() => {
    $('p.hero-text').fadeIn();
}, 1150)