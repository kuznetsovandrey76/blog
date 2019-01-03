$( document ).ready(function() {
    const items = ['relax', 'creative', 'career', 'health', 'family', 'rise', 'env', 'spirit'];
    for (var i = 0; i < items.length; ++i) {
        $('#' + items[i]).hide();
	}

    $('.nav__item').click(function() {
        let select_item = $(this).find('p').text();
        console.log(select_item);

        for (var i = 0; i < items.length; ++i) {
            $('#' + items[i]).hide();
        }
        $('#' + select_item).show();
    })
  });

