
require(['bower_components/aura/lib/aura'], function(Aura) {

  var components = [],
  c = null,
  data = [
    { type: 'image', filepath: 'http://i.imgur.com/ujr7OPC.jpg', name: 'corgi' },
    { type: 'image', filepath: 'http://i.imgur.com/aEjfwGB.jpg', name: 'stretchy kitten'},
    { type: 'image', filepath: 'http://i.imgur.com/hBtWagP.jpg', name: 'raccoons'}
  ];


  for (var i = 0; i< data.length; i++) {
    c = { name: data[i].type, options: { el: '#' + data[i].type + i, filepath: data[i].filepath } };
    console.log(c);
    components.push(c);
  }

  Aura()
    .use('extensions/aura-awesome-extension')
    .start(components).then(function() {
      console.warn('Aura started...');
    });
});
