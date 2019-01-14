$( document ).ready(function() {
    var items = ['relax', 'create', 'career', 'health', 'family', 'rise', 'env', 'spirit'];
    // for (var i = 0; i < items.length; ++i) {
    //     $('#' + items[i]).hide();
    // }
    $.each(items, function(index, value){
        $('#' + value).hide();
    });


    $('.nav__item').click(function() {
        var select_item = $(this).find('p').text();
        // Скрываем всем подписи под иконками
        $('.nav__item').find('p').hide();
        // Показываем только выбранную
        $(this).find('p').show();

        $.each(items, function(index, value){
            $('#' + value).hide();
        });
        $('#' + select_item).show();
    });

    $('.buttons__item_red').click(function() {
        window.location = "/";
    });


    // SHOW all data in weekly post
    $('.buttons__item_green').click(function() {
        $(".content__block").css("display", "block");
    });  

});

