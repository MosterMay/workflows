$ = require 'jquery'

do fill = (item = 'Mässan för elektronik och inbyggda system') ->
  $('.tagline').append "#{item}"
fill