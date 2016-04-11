//  Imagine you have a call center with three levels of employees: respondent,
// manager, and director. An incoming telephone call must be first allocated to a
// respondent who is free. If the respondent can't handle the call, he or she must
// escalate the call to a manager. If the manager is not free or not able to handle it,
// then the call should be escalated to a director. Design the classes and data structures
// for this problem. Implement a method dispatchCall() which assigns a
// call to the first available employee.

var CallCenter = (function() {
  var callcenter;

  function createCallCenter() {
    this.queue = [];

    this.assignCallHandler = function () {
      console.log('asdfsdf')
    }
    this.findEmployee = function() {

    }
  };

  return {
    getInstance: function() {
      if (!callcenter) {
        callcenter =  new createCallCenter();
      };
      return callcenter;
    }
  };
})();



function Employee() {
  this.isFree = function() {
  };
};

function Respondent() {
  this.rank = 1;
};

function Manager() {
  this.rank = 2;
};

function Director() {
  this.rank = 3;
};

Respondent.prototype = new Employee();
Manager.prototype = new Employee();
Director.prototype = new Employee();



console.log(CallCenter.getInstance())
var employee = new Employee();


var respondent = new Respondent();
console.log(respondent.__proto__)
