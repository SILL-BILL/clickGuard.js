$(document).ready(function(){
	$('img').bind('contextmenu', function(){
		alert('右クリックは禁止です。画像のコピーはしないでね。');
		return false;
	});
});
