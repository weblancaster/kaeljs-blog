/**
 * Created by michaellancaster on 12/31/13.
 */
(function(window) {
    window.App = window.App || {};

    App.Aside = {
        init: function() {
            this.activateAside();
        },

        activateAside: function() {
            var btAsideNav = document.getElementById('btAsideNav'),
                masterWrapper = document.getElementById('master');

            btAsideNav.addEventListener('click', function() {
                masterWrapper.classList.toggle('navActive');
            });
        }

    }

})(window);

App.Aside.init();