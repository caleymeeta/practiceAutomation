module.exports = {
    beforeEach: browser => {
        browser
        .url('https://www.google.com/')
        .waitForElementPresent('body') 
    }, //(comma is impt)
    after: browser => {
        browser
        .end()
    },

    'Searching google': browser =>
        browser
        .setValue('input[name="q"]', ['Nightwatch', browser.Keys.ENTER])
        .waitForElementVisible('input[name="q"]')
        .assert.assert.containsText(cssSelector, expected, optional message)

}