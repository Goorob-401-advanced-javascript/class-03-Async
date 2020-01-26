'use strict';
jest.mock('fs')
let validation = require('../edit-file.js')
describe(' Read File Module', () => {
    describe('read ', () => {
        it('if there is no file or wrong one ', () => {
            let file = `${__dirname}/data/person.json`;
            return validation.readFileData(file)
                .then(data => expect(data).not.toBeDefined())
                .catch(error => expect(error).toBeDefined());

        })
    });

    it('read file', () => {
        let file = `${__dirname}/data/person.json`;
        return validation.readFileData(file)
            .then(data => expect(data).toBeDefined())
            .catch(error => expect(error).not.toBeDefined());
    });

}) 