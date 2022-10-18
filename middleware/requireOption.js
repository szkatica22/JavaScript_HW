/**
 * Load a dependency from an object repository
 * @param objectRepository object repository
 * @param propName dependency name
 * @returns {*}
 */
function requireOption(objectRepository, propName) {
    if (objectRepository && objectRepository[propName]) {
        return objectRepository[propName];
    }
    throw new TypeError(propName + ' required');
}

module.exports = requireOption;