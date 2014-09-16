/*
* adapt-extension
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@gmail.com>
*/

define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');
    var ExtensionView = require('extensions/adapt-extension/js/adapt-extensionView');

    // Listen to when the data is all loaded
    Adapt.on('app:dataReady', function() {
        console.log('Plugin has loaded and data is ready');
    });

});