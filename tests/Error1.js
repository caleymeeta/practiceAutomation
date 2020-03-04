
module.exports = {
    beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    after: browser => browser.end(),
    'Problem 1': browser => {
        browser
            .click('[name="employee7"]')
            .pause(3000)
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'Billy Bob')
            .click('[name="employee9"]')
            .verify.value('[name="nameEntry"]', 'Eve Sparks')
            .click('[name="employee7"]')
           // .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    },
}