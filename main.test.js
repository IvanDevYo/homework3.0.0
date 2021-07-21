/**
 * @jest-environment jsdom
 */
const getPath = require('./main')

test('getPath return null if have no argument', () => {
    expect(getPath()).toBe(null)
})

test('getPath return valid string when element have siblings', () => {
    document.body.innerHTML =
        '<header class="header">' +
            '<article class="article"></article>' +
            '<article class="article article--modified">' +
                '<div class="block-one" data-set="1"></div>' +
                '<div class="block-one1" data-set="1"></div>' +
                '<div class="block-one" data-set="2"></div>' +
                '<div class="block-one" data-set="3"></div>' +
                '<div class="block-one" data-set="4"></div>' +
            '</article>' +
            '<article class="article article--super-modified">' +
                '<div class="block-one"></div>' +
            '</article>' +
        '</header>'
    const element = document.querySelectorAll('header .article--modified .block-one:nth-child(4)')[0]
    const string = getPath(element)
    expect(string).toBe('html body header.header article.article.article--modified div.block-one:nth-child(4)')
    expect(document.querySelectorAll(string).length).toBe(1)
})

test('getPath return valid string when element have no siblings', () => {
    document.body.innerHTML =
        '<header class="header">' +
        '<article class="article"></article>' +
        '<article class="article article--modified">' +
        '<div class="block-one" data-set="1"></div>' +
        '<div class="block-one1" data-set="1"></div>' +
        '<div class="block-one" data-set="2"></div>' +
        '<div class="block-one" data-set="3"></div>' +
        '<div class="block-one" data-set="4"></div>' +
        '</article>' +
        '<article class="article article--super-modified">' +
        '<div class="block-one"></div>' +
        '</article>' +
        '</header>'
    const element = document.querySelectorAll('header .article--super-modified .block-one')[0]
    const string = getPath(element)
    expect(string).toBe('html body header.header article.article.article--super-modified div.block-one')
    expect(document.querySelectorAll(string).length).toBe(1)
})