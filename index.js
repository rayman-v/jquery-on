;(function ($){
  $.extend({
    on: function(obj) {
      if (!$.isPlainObject(obj)) return;
      $.each(obj, function (selector, objs) {
        var parent = '';
        selector = selector === 'window' ? window : selector === 'document' ? document : selector;
        $.each(objs, function (event, func) {
          switch (event) {
            case "parent" :
              parent = func;
              break;
            default:
              if (parent === '') {
                $(selector).on(event, func);
              } else {
                $(parent).on(event, selector, func);
              }
              break;
          }
        });
      });
    }
  })
})(jQuery);