/*

todo:
- add a css file to style the component

*/

define(['text!./video.html'], function(t) {
  var template = _.template(t);
  return {
    initialize: function() {
      console.log("init video");
      this.sandbox.on('play', this.render, this);
      this.sandbox.on('clear', this.hide, this);
      this.render();
    },
    conditionalPlay: function(index) {
      console.log("conditionalPlay", index);
      if(index == this.options.container_index)
        this.$el.show();
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
