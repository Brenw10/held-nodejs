const removeKeyFromObject = key => {
    return obj => {
        delete obj[key];
        return obj;
    }
}

module.exports = {
    removeKeyFromObject: removeKeyFromObject
}