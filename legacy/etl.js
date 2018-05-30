function ETL() {
    this.transform = function( old ) {
        var newObj = {};
        var key=Object.keys(old);
        key.forEach(function(key){
            old[key].forEach(function(value){
               newObj[value.toLocaleLowerCase()] = parseInt(key); 
            });
        });
        return newObj;
    }
} 
var etl = new ETL();
var old = { 1: ['A'] };
etl.transform(old);
module.exports= ETL;