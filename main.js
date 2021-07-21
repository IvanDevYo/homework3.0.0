window.getPath = function (el) {
    let array = [getAttributeString(el)]

    let currentElement = el.parentElement
    while (!!currentElement) {
        array.unshift(getAttributeString(currentElement))
        currentElement = currentElement.parentElement
    }
    let string = array.join(' ')
    if (document.querySelectorAll(string).length > 1) {
        string = getQueryStringWithNumberOfChild(string, el)
    }
    return string
}

function getAttributeString(el) {
    const attributes = el.attributes
    let string = el.tagName.toLowerCase()
    for (let i = 0; i < attributes.length; i++) {
        const nodeItem = attributes[i]
        switch (nodeItem.nodeName) {
            case 'class': string += '.' + getValidClassString(nodeItem.value); break
            case 'id': string += '#' + nodeItem.value; break
        }
    }
    return string
}

function getValidClassString(string) {
    return string.split(' ').join('.')
}

function getQueryStringWithNumberOfChild(inputString, el) {
    if (!el.previousElementSibling) {
        return inputString + ':first-child'
    }
    if (!el.nextElementSibling) {
        return inputString + ':last-child'
    }
    const elements = el.parentElement.children
    for (let i = 1; i < elements.length - 1; i++) {
        if (elements[i] === el) {
            return inputString + `:nth-child(${i + 1})`
        }
    }
    return inputString
}