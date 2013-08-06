define(['text!./image.html'], function(t) {
  var template = _.template(t);
  return {
    initialize: function() {
      this.html(template(this.options));
    }
  };
});
