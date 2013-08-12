/*

todo:
- add a css file to style the component

*/

define(['text!./video.html'], function(t) {
  var template = _.template(t);
  return {
    initialize: function() {
      console.log("init video");
      this.sandbox.on('play', this.conditionalPlay, this);
      this.sandbox.on('clear', this.hide, this);
      this.render();
    },
    conditionalPlay: function(index) {
      var video = this.$el.find('video').get(0);
      console.log("conditionalPlay", index, this.options.container_index);
      if(index == this.options.container_index) {
        this.$el.show();
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
        this.$el.hide();
      }
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
