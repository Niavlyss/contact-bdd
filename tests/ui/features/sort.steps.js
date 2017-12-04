const { Given , Then , When } = require ( ' cucumber ');

Given (/^The sort contact list is display$/, function (callback){
    this . browser . visit (" http ://127.0.0.1:3000/ login /" , ( err ) => {
        if (err) throw err;
        var tab = this.browser.queryAll('table tbody td');
        var liste = this.browser.tabs.current.Contact.Contacts.instance();
        var iterator = liste.iterator();
        var tabTest = [];
        var j = 0;
        var l = 0;

        var k=liste.iterator();
        while(k.hasNext()){
            var val = k.next();
            this.browser.assert.equal(tabTest[j],tab[l+1].innerText);
            j+=1;
            l+=6;
        }
        callback();
    )};
)};

When (/^User clicks on sort button$/, function (callback){
    this . browser . visit (" http ://127.0.0.1:3000/ login /" , ( err ) => {
        if (err) throw err;
        var button = this.browser.query('#button_sort');
        button.click();
        callback();
    )};
)};

Then (/^The list is sorted$/, function (callback){
    this . browser . visit (" http ://127.0.0.1:3000/ login /" , ( err ) => {
        if (err) throw err;
        var tab = this.browser.queryAll('table tbody td');
        var liste = this.browser.tabs.current.Contact.Contacts.instance();
        var iterator = liste.iterator();
        var tabTest = [];
        var j = 0;
        var l = 0;

        var k=liste.iterator();
        tabTest.sort();
        while(k.hasNext()){
            var val = k.next();
            this.browser.assert.equal(tabTest[j],tab[l+1].innerText);
            j+=1;
            l+=6;
        }
        callback();
    )};
)};