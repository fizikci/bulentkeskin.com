function go(a, x){
	$('slide').morph('top:'+x+'em');
	$$('.act').each(function(elm){elm.removeClassName('act'); elm.addClassName('a');});
	$(a).removeClassName("a");
	$(a).addClassName("act");
}

function recalculateFontSize(){
	var size = getWindowSize();
	$$('body')[0].setStyle({fontSize: (size.height/42)+"px"});
}

document.on('dom:loaded', function(){
	recalculateFontSize();
	Effect.Grow('StaticHtml_3');
});


window.onresize = function(event) {
	recalculateFontSize();
}

function getWindowSize(w) {
	var width, height;
	w = w ? w : window;
	width = w.innerWidth || (w.document.documentElement.clientWidth || w.document.body.clientWidth);
	height = w.innerHeight || (w.document.documentElement.clientHeight || w.document.body.clientHeight);

	return { width: width, height: height };
}
