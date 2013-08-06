require(['bower_components/aura/lib/aura'], function(Aura) {


  Aura()
    .use('extensions/aura-awesome-extension')
    .start([{ name: 'image', options: { el: '#hello1'}}, { name: 'image', options: { el: '#hello2'}}]).then(function() {
      console.warn('Aura started...');
    });
});
