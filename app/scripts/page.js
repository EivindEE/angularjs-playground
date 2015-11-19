/* globals $ */
'use strict';
$('ul.nav li').click(function () {
	$('ul.nav li').removeClass('active');
	$(this).addClass('active');
});
