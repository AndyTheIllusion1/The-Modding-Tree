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
addNode("2", {
    symbol: "<img src='data/blood.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#3e1601',
    position: 2,
    row: 0,
    branches: ["Bl"],
    tooltip: "Unlocks the Blood Aspect",
    layerShown() {
        if(player.tUnlocked[2] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[2] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[2] = 1
    }
})
addNode("3", {
    symbol: "<img src='data/breath.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#4379e6',
    position: 3,
    row: 0,
    branches: ["Br"],
    tooltip: "Unlocks the Breath Aspect",
    layerShown() {
        if(player.tUnlocked[3] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[3] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[3] = 1
    }
})
addNode("4", {
    symbol: "<img src='data/heart.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#55142a',
    position: 4,
    row: 0,
    branches: ["Br"],
    tooltip: "Unlocks the Heart Aspect",
    layerShown() {
        if(player.tUnlocked[4] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[4] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[4] = 1
    }
})
addNode("5", {
    symbol: "<img src='data/mind.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#00923d',
    position: 5,
    row: 0,
    branches: ["M"],
    tooltip: "Unlocks the Mind Aspect",
    layerShown() {
        if(player.tUnlocked[5] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[5] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[5] = 1
    }
})
addNode("6", {
    symbol: "<img src='data/Void.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#104ea2',
    position: 0,
    row: 1,
    branches: ["V"],
    tooltip: "Unlocks the Void Aspect",
    layerShown() {
        if(player.tUnlocked[6] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[6] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[6] = 1
    }
})
addNode("7", {
    symbol: "<img src='data/Light.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#f0840c',
    position: 1,
    row: 1,
    branches: ["L"],
    tooltip: "Unlocks the Light Aspect",
    layerShown() {
        if(player.tUnlocked[7] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[7] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[7] = 1
    }
})
addNode("8", {
    symbol: "<img src='data/rage.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#520c61',
    position: 2,
    row: 1,
    branches: ["R"],
    tooltip: "Unlocks the Rage Aspect",
    layerShown() {
        if(player.tUnlocked[8] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[8] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[8] = 1
    }
})
addNode("9", {
    symbol: "<img src='data/hope.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#ffde55',
    position: 3,
    row: 1,
    branches: ["R"],
    tooltip: "Unlocks the Hope Aspect",
    layerShown() {
        if(player.tUnlocked[9] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[9] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[9] = 1
    }
})
addNode("10", {
    symbol: "<img src='data/doom.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#306800',
    position: 4,
    row: 1,
    branches: ["D"],
    tooltip: "Unlocks the Doom Aspect",
    layerShown() {
        if(player.tUnlocked[10] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[10] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[10] = 1
    }
})
addNode("11", {
    symbol: "<img src='data/life.png' style='width:calc(90% - 2px);height:calc(90% - 2px);margin:5%'></img>",
    color: '#a49787',
    position: 5,
    row: 1,
    branches: ["Li"],
    tooltip: "Unlocks the Life Aspect",
    layerShown() {
        if(player.tUnlocked[11] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
    },
    canClick() {
        if(player.tUnlocked[11] == 1 || player.startAspects >= 4) {
            return false
        } else {
            return true
        }
},
    onClick() {
        player.startAspects = player.startAspects+1
        player.tUnlocked[11] = 1
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
		points: new Decimal(1),
    }},
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Time", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: .5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
        rows: 1,
        cols: 6,
        11: {
            cost() {return new Decimal(1000)},
            title() {return "Test"},
            display() {return "Idk yet"},
            canAfford() {return player[this.layer].points.gte(this.cost())},
            effect() {return new Decimal(1).times(getBuyableAmount(this.layer, 11))}
        }
    },
    buyables: {
        rows: 1,
        cols: 6,
        11: {
        cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id))},
        title() { return format(getBuyableAmount(this.layer, this.id), 0) +"<br/>Time Acceleration"},
        display() { return "Time is accelerating point gain by " + format(tmp[this.layer].buyables[this.id].effect) + ".\n\ Cost:" + format(tmp[this.layer].buyables[this.id].cost) + " Time" },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        effect(x) { if(hasUpgrade(this.layer, this.id)) { 
            return new Decimal(2).times(getBuyableAmount(this.layer, this.id))
        } else {
            return new Decimal(1).add(getBuyableAmount(this.layer, this.id)) 
        }
        },
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            }
        },
        12: {
            cost(x) {return new Decimal(100).pow(x || getBuyableAmount(this.layer, this.id))},
            title() {return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>"}
        }
    },
    layerShown(){
        if(player.tUnlocked[0] == 1) {
            return true
        } else {
            return false
        }
    }
})