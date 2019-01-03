$( document ).ready(function() {
    const items = ['relax', 'creative', 'career', 'health', 'family', 'rise', 'env', 'spirit'];
    $.each(items, function(index, value){
        $('#' + value).hide();
	});

    $('.nav__item').click(function() {
        let select_item = $(this).find('p').text();
        console.log(select_item);

        $.each(items, function(index, value){
            $('#' + value).hide();
        });
        $('#' + select_item).show();
    })
  });