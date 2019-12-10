$(function() {
  $('body').find('p').each(function(index, el) {
    $(this).removeAttr('style')
    $(this).attr('style', 'font-family: Meiryo; font-size: 15px; letter-spacing: 0.05em;')
  })
})


javascript:void((function(){$("body").find("p").each(function(){$(this).removeAttr("style"),$(this).attr("style","font-size: 15px")})}());
