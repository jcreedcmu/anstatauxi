var table = {"s": "ŝ",
	     "h": "ĥ",
	     "c": "ĉ",
	     "g": "ĝ",
	     "j": "ĵ",
	     "u": "ŭ" };

document.addEventListener('keypress', function(e) {
  if (String.fromCharCode(e.charCode) == "x") {
    var target = e.target;
    var start = target.selectionStart;
    if (start > 0) {
      var lastChar = target.value.substring(start - 1, start);
      var replacement = table[lastChar];
      if (replacement) {
	target.value = target.value.substring(0, start - 1) +
	  replacement +
	  target.value.substring(start);
	target.selectionStart = start;
	target.selectionEnd = start;
	e.preventDefault();
	e.stopPropagation();
      }
    }
  }
});
