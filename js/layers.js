addNode("0", {
    symbol: "<img src='data/time.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#b70d0e',
    position: 0,
    row: 0,
    branches: ["T"],
    tooltip: "Unlocks the Time Aspect",
    tooltipLocked: "You already unlocked time!!!",
    layerShown() {
        return true
    },
    canClick() {
        if(player.tUnlocked[0] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[0] = 1
    }
})
addNode("1", {
    symbol: "<img src='data/space.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#000000',
    position: 1,
    row: 0,
    branches: ["S"],
    tooltip: "Unlocks the Space Aspect",
    layerShown() {
        if(player.tUnlocked[1] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[1] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[1] = 1
    }
})
addLayer("T", {
    name: "Time", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<img src='data/time.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>", // This appears on the layer's node. Default is the id with the first letter capitalized
    color: '#b70d0e',
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 2,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Primal Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    hotkeys: [
        {key: "p", description: "P: Reset for primal points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        if(player.tUnlocked[0] == 1) {
            return true
        } else {
            return false
        }
    }
})