new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor : ['#cd57eb', '#fc6d65', '#fdc32d'],
    fixedElements: '#navigate, #subscribe',
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'right',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    recordHistory: false
});

// Include hljs sintaxis
hljs.initHighlightingOnLoad();

// Include boostrap modal
$('#yorbModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})