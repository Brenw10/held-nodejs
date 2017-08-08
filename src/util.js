const removeKeyFromObject = key => {
    return obj => {
        delete obj[key];
        return obj;
    }
}

const countArrayByObjectKey = (key, name) => {
    return obj => {
        obj[name] = obj[key].length;
        return obj;
    }
}

const existOnArray = (key, existing, name) => {
    return obj => {
        obj[name] = obj[key].indexOf(existing) !== -1;
        return obj;
    }
}

module.exports = {
    removeKeyFromObject: removeKeyFromObject,
    countArrayByObjectKey: countArrayByObjectKey,
    existOnArray: existOnArray
}