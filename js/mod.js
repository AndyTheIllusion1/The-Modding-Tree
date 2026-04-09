let modInfo = {
	name: "The Aspect Tree",
	id: "aspects",
	author: "AndyTheIllusion",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.2",
	name: "the stage",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0.2</h3><br>
		<h4>The one where time and space are implemented</h4>
		- time bullshit<br>
	<h3>v0.0.1</h3><br>
		<h4>This is the start of me making shit</h4><br>
		- Added a way to choose starting aspects.<br>
		- Added support for modals, though this is only used for the starting message right now<br>
		- Added the Time aspect<br>
		- Started work on actually implementing shit for the Time Aspect`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {

	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if(player.startingState == -1) {
		clearInterval(interval);
		StartModal();
	} else if(player.startingState = 1) {
		if(getBuyableAmount('T', 11) > 0)  {
			gain = gain.times(buyableEffect('T', 11))
		} 
	}
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	startAspects: 0,
	tUnlocked: [0,0,0,0,0,0,0,0,0,0,0,0],
	startingState: -1
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}