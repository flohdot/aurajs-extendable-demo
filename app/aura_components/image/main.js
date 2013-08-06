define(['text!./image.hbs'], function(template) {
  return {
    initialize: function() {
      this.html(template);
    }
  };
});
