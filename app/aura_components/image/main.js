/*

todo:
- add a css file to style the component

*/

define(['text!./image.html'], function(t) {
  var template = _.template(t);
  return {
    initialize: function() {
      console.log("init image");
      this.sandbox.on('play', this.conditionalPlay, this);
      this.render();
    },
    conditionalPlay: function(index) {
      console.log("conditionalPlay", index, this.options.container_index);
      if(index == this.options.container_index)
        this.$el.show();
      else
        this.$el.hide();
    },
    hide: function() {
      this.$el.hide();
    },
    render: function() {
      this.html(template(this.options));
      this.hide();
    }
  };
});
