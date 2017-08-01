const removeKeyFromObject = key => {
    return obj => {
        delete obj[key];
        return obj;
    }
}

const countArrayByObjectKey = key => {
    return obj => {
        let newObj = obj;
        newObj[`${key}Length`] = obj[key].length;
        return newObj;
    }
}

module.exports = {
    removeKeyFromObject: removeKeyFromObject,
    countArrayByObjectKey: countArrayByObjectKey,
}