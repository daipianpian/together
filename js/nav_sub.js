// JavaScript Document
$(function(){
var $span=$("#spanTip");
$("#nav_sub").hover(function(){
  $('ul.nav_sub').slideToggle('slow',function(){ 
  $span.html()=="↓"?$span.html("↑"):$span.html("↓");
  });
});
});