const { expect } = require('chai');
const model = require('../../scrape/model');

describe('Scrape OG Tags', () => {
    describe('Test Validate Function', () => {
        it('Invalid URI', () => {
            expect(model.validURL('testUrl')).equal(false);
        })

        it('valid URI', () => {
            expect(model.validURL('http://www.google.com')).equal(true);
        })
    });

    describe('Test Fetch HTML', () => {
        it('Invalid Url', () => {
            model.fetchHtml('test').catch((err) => {
                expect(err.success).equal(false);
            })
        });

        it('Valid URL to fetch html', () => {
            model.fetchHtml('https://www.google.com').then((res) => {
                expect(res.success).equal(true);
            })
        });
    })

})
