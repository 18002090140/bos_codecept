// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({


    gotohome:function(){
      this.amOnPage('http://120.78.125.187:8888/#/ModuleList');
    }
    ,/** //TODO
    所有能加上context的都加上locate范围，让对弹出框或者表格等复杂组件的内容更方便
     */
    in:function(locate,func){
      var that=this;
    
      func.call(this,I)

    }
    
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
