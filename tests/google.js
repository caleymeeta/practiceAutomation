module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
        .waitForElementVisible('body', 1000)
    },
    after: browser => {
        browser.end()
    },
    'Searching google': browser => {
        browser
        //.setValue('input[name="q"]', ['trees of the Wasatch Range', browser.Keys.ENTER])
        .setValue('input[name="q"]', ['Cookie Monster', browser.Keys.ENTER])
        .pause(3000)
        .waitForElementVisible('#res')
        .assert.containsText('#res','Cookie Monster')
        .clearValue('input[name="q"]')
        .setValue('input[name="q"]', ['Megaman', browser.Keys.ENTER])
        .expect.element('input[name="q"]').value.to.equal('Megaman')

        browser
        .clearValue('input[name="q"]')
        .setValue('input[name="q"]', ['Mercedes ', browser.Keys.ENTER])
        .assert.containsText('#res','Mercedes')

        
      
        
      
    }
}