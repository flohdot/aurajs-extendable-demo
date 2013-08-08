
require(['bower_components/aura/lib/aura'], function(Aura) {


  // TODO add an external components source

  Aura()
    .use('extensions/aura-include-extension')
    .start([{ name: 'container', options: { el: "#container" }}]).then(function() {
      console.warn('Aura started...');
    });
});
