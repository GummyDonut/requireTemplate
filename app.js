requirejs.config({
    baseUrl: 'lib',
    shims : {

    },
    paths: {
        
    }
});


require(['main'], function(Main) {
    Main.init();
});
