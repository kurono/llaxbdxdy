//var mx = new Matrix();
//console.log(1);

var Matrix = ( function() {
    var _privateVar1 = "_privateVar1";
    
    function Matrix() {
    };
    
    // private method
    privateFun1() {
        return "privateFun1";
    }
    
    // public method
    Matrix.prototype.get_privateVar1 = function() {
        return _privateVar1;
    };
    
    return Matrix;
})();

