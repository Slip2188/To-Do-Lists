module.exports.getDay  = function(){
    const today = new Date();
    return today.toLocaleDateString("en-US", {weekday : "long"});
}