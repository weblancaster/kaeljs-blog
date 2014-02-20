(function(window, undefined) {
    'use strict';

    window.App = window.App || {};

    window.App = {

        appEl: document.querySelector('#app'),

        init: function() {
            this.addTriggerAside();
        },

        addTriggerAside: function() {
            var that = this;
            var asideTriggerBt = document.querySelector('#js-asideTrigger');

            asideTriggerBt.addEventListener('click', function() {
                var isAsideVisible = that.appEl.getAttribute('data-aside-visible');

                if ( isAsideVisible === 'true' ) {
                    that.appEl.setAttribute('data-aside-visible', 'false')
                } else {
                    that.appEl.setAttribute('data-aside-visible', 'true')
                }
            }, false);
        }
    }

    window.App.init();

})(window, undefined);