

$(function(){

    // $(".select2-container").css()

    $('.personSearch').select2({
        placeholder: '请选择参与人员',
        formatResult: function (item) {
            var str = item.text;
            var idx = str.indexOf('|');
            return str.substring(0,idx);
        },
        formatSelection: function (item) {
            var str = item.text;
            var idx = str.indexOf('|');
            return str.substring(0,idx);
        },
    });




});