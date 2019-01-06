var one = "one.png";
var two = "two.png";
var current = one;

function updateIcon() {
	chrome.browserAction.setIcon({path: current});

	if (current.valueOf() == one.valueOf())
		current = two;
	else
		current = one;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
