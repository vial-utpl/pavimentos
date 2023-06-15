$('.trafico-checkbox').each(function (i, item) {
    if (item.checked) {
        var index = $(item).attr('index');
           
    }
    item.peso1 = $('#peso1_' + index + '').val();
    item.peso2 = $('#peso2_' + index + '').val();
item.peso3 = $('#peso3_' + index + '').val();
item.peso4 = $('#peso4_' + index + '').val();

});