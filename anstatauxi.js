var table = {"s": "ŝ",
	     "S": "Ŝ",
	     "h": "ĥ",
	     "H": "Ĥ",
	     "c": "ĉ",
	     "C": "Ĉ",
	     "g": "ĝ",
	     "G": "Ĝ",
	     "j": "ĵ",
	     "J": "Ĵ",
	     "u": "ŭ",
	     "U": "Û",
	    };

var enabled = false;

document.addEventListener('keypress', function(e) {
  chrome.storage.local.get("enabled", function(obj) {
    enabled = obj.enabled;
  });
  if (enabled) {
    var typed = String.fromCharCode(e.charCode);
    if (typed == "X" || typed == "x") {
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
  }
});
