String.prototype.toJadenCase = function() {
    return this.replace(/(^\w{1}|\s\w{1})/g, word => word.toUpperCase())
};