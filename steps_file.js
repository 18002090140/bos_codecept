// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    gotohome:function(){
      this.amOnPage('http://120.78.125.187:8888/#/ModuleList');
    }


    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
