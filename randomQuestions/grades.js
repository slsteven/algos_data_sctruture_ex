var persons = [{name: "Rajesh", gender:"M"},
               {name: "Rakesh", gender:"M"},
               {name: "Babita", gender:"F"},
               {name: "Rina", gender:"F"},
               {name: "Rupesh", gender:"M"},
               {name: "Ramesh", gender:"M"},
               {name: "Suresh", gender:"M"},
               {name: "Rani", gender:"F"},
               {name: "Amit", gender:"M"},
               {name: "Arpita", gender:"F"}];


function Person() {
  this.personList = [];
  this.add = function(list) {
    for(var i = 0; i < list.length; i++) {
      this.personList.push(list[i]);
    };
  };
}

var p = new Person()
p.add(persons)

console.log(p.personList);

Person.prototype.display = function(pick) {
  for(var i = 0; i < this.personList.length; i++) {
    if (this.personList[i].gender === pick)
      console.log(this.personList[i])
  }
}

p.display("F");
