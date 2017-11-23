export default (src, callback) => {
    var o = new Image();
    o.src = src;
    if (o.complete) {
        typeof callback === "function" && callback.call(o);
    } else {
        o.onload = function() {
            typeof callback === "function" && callback.call(this);
        };
    }
};