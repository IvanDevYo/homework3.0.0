window.getPath = function (el) {
    let array = [getAttributeString(el)]

    let currentElement = el.parentElement
    while (!!currentElement) {
        array.unshift(getAttributeString(currentElement))
        currentElement = currentElement.parentElement
    }
    // coming soon
    return array.join(' ')
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