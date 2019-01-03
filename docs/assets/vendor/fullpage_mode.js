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

// formc0ntact
$(document).ready(function() {
    $("#yorbButton").click(function() {
        var email = $("#yorbInput").val(); 
        var message = $("#yorbTextarea").val();
        $.ajax({
            url: "https://yorb.ru/assets/data/contact.php",
            type: "post",
            dataType: "json",
            data: {
                "email": email,
                "message": message
            },
            success: function() {  
                // Success message
                $('#success')
                .append("<strong>Ваше сообщение отправлено. </strong>");
                //clear all fields
                $('#contact-form').trigger("reset");
            },
        });
    });
});