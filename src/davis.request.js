Davis.Request = function (event) {
  var self = this;
  var target = event.target;

  this.path = $(event.target).attr('href')
  this.method = 'get'
  // var clickRequest = function () {
  //   self.path = target.href.split(/\?/)[0];
  //   self.method = 'get';
  // };
  // 
  // var submitRequest = function () {
  //   self.path = target.attr('action');
  //   self.method = target.attr('method') || 'post';
  //   target.serialize().split(/&/).forEach(function (keyval) {
  //     self.params[keyval.split("=")[0]] = keyval.split("=")[1]
  //   });
  // };

  // if (target.is('a')) {
    // clickRequest()
  // } else if (target.is('form')) {
  //   submitRequest()
  // };

  // this.event = event;
}

Davis.Request.prototype = {
  
}