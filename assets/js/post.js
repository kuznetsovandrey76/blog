$( document ).ready(function() {
    var items = ['relax', 'creative', 'career', 'health', 'family', 'rise', 'env', 'spirit'];
    // for (var i = 0; i < items.length; ++i) {
    //     $('#' + items[i]).hide();
    // }
    $.each(items, function(index, value){
        $('#' + value).hide();
    });

    $('.nav__item').click(function() {
        var select_item = $(this).find('p').text();

        $.each(items, function(index, value){
            $('#' + value).hide();
        });
        $('#' + select_item).show();
    });

    $('.buttons__item_red').click(function() {
        window.location = "/";
    });
  });

