/*

  this is the glorified playlist

  for now THERE CAN BE ONLY ONE

*/

define(['text!./container.html'], function(t) {
  var template = _.template(t);
  return {
    index : 0,
    data:  [
      { type: 'video', filepath: '/assets/green.m4v', name: 'some dumb vine video' },
      { type: 'image', filepath: 'http://i.imgur.com/ujr7OPC.jpg', name: 'corgi' },
      { type: 'image', filepath: 'http://i.imgur.com/aEjfwGB.jpg', name: 'stretchy kitten'},
      { type: 'image', filepath: 'http://i.imgur.com/hBtWagP.jpg', name: 'raccoons'},
      { type: 'video', filepath: '/assets/blue.m4v', name: 'some dumb vine video' }
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
      this.showNext();
    },

    loop: function() {

        console.log("loop", this);

        setTimeout(this.showNext, 2000);

        if(this.index < this.data.length) {
          this.index++;
        } else {
          this.index = 0;
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




//--------


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




//--------


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
