const removeKeyFromObject = key => {
    return obj => {
        delete obj[key];
        return obj;
    }
}

const countArrayByObjectKey = (key, name) => {
    return obj => {
        let newObj = obj;
        newObj[name] = obj[key].length;
        return newObj;
    }
}

module.exports = {
    removeKeyFromObject: removeKeyFromObject,
    countArrayByObjectKey: countArrayByObjectKey,
}