// Functions to add sentece to paragraph's

function addSentence1() {
	var paragraph = document.getElementById("p1");
	var text = document.createTextNode(" People enter REM sleep within the first 90 minutes of falling asleep and, as the sleep cycle repeats throughout the night, REM sleep occurs several times nightly. It accounts for approximately 20 to 25 percent of an adult's sleep cycle, and over 50 percent of an infant's.");
	paragraph.appendChild(text);
}

function addSentence2() {
	var paragraph = document.getElementById("p2");
  var	text = document.createTextNode("Besides adjusting the timing of the clock, bright light has another effect. It directly inhibits the release of melatonin. ");
	paragraph.appendChild(text);
}
