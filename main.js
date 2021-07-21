window.getPath = function (el) {
    let string = getAttributeString(el)
    // coming soon
    return string
}

function getAttributeString(el) {
    const attributes = el.attributes
    let string = ''
    for (let i = 0; i < attributes.length; i++) {
        const nodeItem = attributes[i]
        switch (nodeItem.nodeName) {
            case 'class': string += '.'; break
            case 'id': string += '#'; break
        }
        string += nodeItem.value
    }
    if (!string) return el.tagName
    return string
}