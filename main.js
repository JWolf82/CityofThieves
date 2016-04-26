angular.module('Begin',[])
    .controller('myController', ['$interval',crimeSpree])

function crimeSpree($interval){
    
    var ctrl = this

    ctrl.intro = "Night has fallen on Verrakis.  The thieves have come out to play in a 'winner take all' crime spree.  The stakes are high as losing all your possessions leaves you vulnerable to assassins and you'll end up 'sleeping with the fishes'"

var  Burglar = function(name){
    this.name = name
    this.dead = false
    this.stuff = ["knife", "lockpick", "gloves", "map", "grappling hook"]

}

var ourThieves = ["Jeff", "Jill", "Robert"]

Burglar.prototype.steal = function(victim){
    if(victim.stuff.length != 0){
        var item = victim.stuff.pop()
        this.stuff.push(item)
        this.stuff.push(victim.stuff.pop())
        
        ctrl.intro += "<b>" + this.name + ' stole ' + item + ' from ' + victim.name + "." + "</b>" + "<br>"
        ctrl.intro += this.name + ' now has ' + this.stuff.join(', ') + '.' + "<br>"
        ctrl.intro +=victim.name + ' now has ' + victim.stuff.join(', ') + '.' + "<br>"
        ctrl.intro +='===-======-=====' + "<br>"
        
        
        
    }  else {
        victim.dead = true
        ctrl.intro +=("<h2 style=color:red>" + victim.name + " is sleeping with the fishes." + "</h2>" + "<br>")
    }
    
}


// var alice = new Burglar('alice')
// var bob = new Burglar('bob')
//we're calling the steal method off of alice, passing in Bob as a victim. thus alice is stealing from bob.
// alice.steal(bob)

var cityOfThieves = []

for (var i = 0; i < 3; i++){
    cityOfThieves.push(new Burglar(ourThieves[i]))
}

// console.log(cityOfThieves)

var randomTheft = function(){
    //popular idiom for random element in an array
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    if (burglar !== victim){
        burglar.steal(victim)
           console.log(ctrl.intro)
    }
}

ctrl.startCrime = function(){
    console.log("Test")
    burgleInterval = $interval(function(){
    cityOfThieves = cityOfThieves.filter(function(thief){
        if      (thief.dead === false){return true}
        else if (thief.dead === true){return false}
        // return !thief.dead
    })
    
    if(cityOfThieves.length > 1){
        randomTheft()
    }
    else{
        ctrl.intro +=("<h1>" + cityOfThieves[0].name + ' says: There can be only be one.' + '</h1>')
        $interval.cancel(burgleInterval)
    }
}, 2) 
        }

    
 
}