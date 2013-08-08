/*

  this is the glorified playlist

  for now THERE CAN BE ONLY ONE

*/

define(['text!./container.html'], function(t) {
  var template = _.template(t);
  return {
    index : 0,
      data:  [
        { type: 'image', filepath: 'http://i.imgur.com/ujr7OPC.jpg', name: 'corgi' },
        { type: 'image', filepath: 'http://i.imgur.com/aEjfwGB.jpg', name: 'stretchy kitten'},
        { type: 'image', filepath: 'http://i.imgur.com/hBtWagP.jpg', name: 'raccoons'},
        { type: 'video', filepath: 'https://v.cdn.vine.co/r/videos/FE64A0BDB6975219026316152832_1a80c7715…UAdnhghKt9VSBcoYgP2.KtKvYYA.mp4?versionId=GJt31Te0ba5Z08_hvjoNlE0Qux.R4KNP', name: 'some dumb vine video' }
      ],

     initialize: function() {
      console.log(_);
      _.bindAll(this, 'loop', 'showNext');

      // TODO read the object thru objectreader extension, preload?

      var children = [],
      c = null,
      element = '';

      // TODO error handling for type... must have a component by that name.

      for (var i = 0; i< this.data.length; i++) {
        element = this.data[i].type + i;
        c = { name: this.data[i].type, options: { el: "#" + element, filepath: this.data[i].filepath, container_index: i  } };
        console.log(c);
        this.$el.append("<div id='" + element + "' data-title='"+ this.data[i].name +"'></div>");
        children.push(c);
      }
      console.log("here");

      var s = this.sandbox.start(children);
      console.log(s, s.children);
      this.loop();
    },

    loop: function() {

        console.log("loop", this);

        setTimeout(this.showNext, 3000);

        if(this.index >= this.data.length) {
          this.index = 0;
        } else {
          this.index++;
        }
    },

    showNext: function() {
      console.log("showNext", this, this.index);
      this.sandbox.emit('play', this.index);

      this.loop();
    }


    // just show for 5 secs and hide

  };
});
