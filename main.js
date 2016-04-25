

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
        // this.stuff.push(victim.stuff.pop())
        document.write("<b>" + this.name + ' stole ' + item + ' from ' + victim.name + "." + "</b>" + "<br>")
        document.write(this.name + ' now has ' + this.stuff.join(', ') + '.' + "<br>")
        document.write(victim.name + ' now has ' + victim.stuff.join(', ') + '.' + "<br>")
         document.write('===-======-=====' + "<br>")
        
        
    }  else {
        victim.dead = true
        document.write("<h2 style=color:red>" + victim.name + " is sleeping with the fishes." + "</h2>" + "<br>")
        console.log('===-======-=====')
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
    }
}

burgleInterval = setInterval(function(){
    cityOfThieves = cityOfThieves.filter(function(thief){
        if      (thief.dead === false){return true}
        else if (thief.dead === true){return false}
        // return !thief.dead
    })
    
    if(cityOfThieves.length > 1){
        randomTheft()
    }
    else{
        document.write("<h1>" + cityOfThieves[0].name + ' says: There can be only be one.' + '</h1>')
        clearInterval(burgleInterval)
    }
    
 
  
  
}, 2)