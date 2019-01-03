$( document ).ready(function() {
    var items = ['relax', 'creative', 'career', 'health', 'family', 'rise', 'env', 'spirit'];
    for (var i = 0; i < items.length; ++i) {
        $('#' + items[i]).hide();
        alert(items[i]);
	}

    $('.nav__item').click(function() {
        var select_item = $(this).find('p').text();

        for (var i = 0; i < items.length; ++i) {
            $('#' + items[i]).hide();
        }
        $('#' + select_item).show();
    })
  });

