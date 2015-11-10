'use strict';

app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_homeView
(function () {
    app.homeView.set('title', 'Home');
})();
// END_CUSTOM_CODE_homeView