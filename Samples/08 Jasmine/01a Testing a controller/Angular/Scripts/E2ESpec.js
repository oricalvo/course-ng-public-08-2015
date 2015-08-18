describe("HomeCtrl", function () {
    it('Does not allow save when name is empty', function () {
        var contactList = element.all(by.repeater('contact in ctrl.contacts'));

        browser.get('http://localhost:1240/');

        browser.driver.sleep(1100);
        expect(contactList.count()).toEqual(2);

        element(by.model('ctrl.name')).sendKeys('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        element(by.css('button')).click();
        browser.driver.sleep(1100);
        expect(contactList.count()).toEqual(3);
    });
});
