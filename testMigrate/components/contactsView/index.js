'use strict';

app.contactsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_contactsView
(function () {
    app.contactsView.set('title', 'Contacts');
    
    var dataSource = new kendo.data.DataSource({
        data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    });
    app.contactsView.set('dataSource', dataSource);
    
    app.contactsView.set('alert', function (e) { alert(e.data.name); });
})();
// END_CUSTOM_CODE_contactsView