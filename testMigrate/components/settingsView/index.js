'use strict';

app.settingsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_settingsView
(function () {
    app.settingsView.set('title', 'Settings');
})();
// END_CUSTOM_CODE_settingsView