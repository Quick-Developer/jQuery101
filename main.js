$(document).ready(function () 
{
	$('h1').css('color','blue');
	$('div.red-div').css('color','red');
	$('li').first().css('color','green');
	$('ul li:nth-child(2)').css('color','yellow');
	$('li:contains("pink")').css('color','pink');
	$('#brown-div').css('color','brown');
	$('#btn-some-text').click(function() {
		alert( "Handler for click button the value input is - " + $('#my-input').val());
		$('#my-input').val('');
		 });
	$('#btn-some-student').click(function() {
		$("ul.students").append("<li>" + $('#my-input-student').val() + "</li>");
		$('#my-input-student').val('');
		});
	$('body' ).delegate(".students li", 'click' ,function(){
			var index1 = $(this).index();
			$(this).remove();
    
  });
  
  

});
 

