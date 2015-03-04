var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Mässan för elektronik och inbyggda system');

fill;
