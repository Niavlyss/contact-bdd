const { Given , Then , When } = require ( ' cucumber ');

Given (/^The contact list is display$/, function(callback){
    this . browser . visit (" http ://127.0.0.1:3000/ login /" , ( err ) => {
        if (err) throw err;
        var list = this.browser.tabs.current.Contact.Contacts.instance();
        var i = list.iterator();
        var tab = this.browser.queryAll('table tbody td');
        var j = 0;
        while (i.hasNext()) {
            var val = i.next();
            this.browser.assert.equal(val.firstName(), tab[j].innerText);
            this.browser.assert.equal(val.lastName(), tab[j + 1].innerText);
            j += 6;
        }
        callback();
    )};
)};

When (/^User clicks on remove button of the first contact$/, function(callback){
    this . browser . visit (" http ://127.0.0.1:3000/ login /" , ( err ) => {
        if (err) throw err;
        var line = this.browser.queryAll('table tbody td a');
        line[0].click();
        callback();
    )};
)};


Then (/^The first contact is removed$/, function(callback){
    this . browser . visit (" http ://127.0.0.1:3000/ login /" , ( err ) => {
        if (err) throw err;
        var first = this.browser.tabs.current.Contact.Contacts.instance().iterator().next();
        this.browser.assert.equal(first.firstName(), "Jacques");
        callback();
    )};
)};



