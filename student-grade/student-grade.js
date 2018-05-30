'use strict';

function School() {

    this.class = {};
    this.roster = function() {
        var _keys = Object.keys(this.class);
        if (_keys.length > 0) {
            _keys.forEach(function(key) {
                this.class[key].sort();
            }, this);
        }   
        return this.class;
    }
    this.grade = function(grade) {
        if(this.class[grade]) {
            return this.class[grade].sort();
        }
        return [];
        };

     this.add = function(studentName, grade ) {
        if (this.class[grade]) {
            this.class[grade].push(studentName);
        } else {
            this.class[grade] = [studentName];
        }
     }
}
var school = new School();
school.add('methi', 2);
school.add('methili', 2);

module.exports =School;

