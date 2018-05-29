
lazyGuy = function () {
 let response = '';
 var question =/[?]/;
 var withoutSaying = /[^\s]/;
 var yelling = /[^a-z]/;
 
 this.hey = function(str1 , str2) {
    if(str2 == undefined) {
        if(question.test(str1))
        {
            response = 'Sure.';
        }
        if(withoutSaying.test(str1)) {
            response = 'Fine. Be that way!';
        }
        if(yelling.test(str1)) {
            response = 'Whoa, chill out!';
        }
        else {
            response = 'Whatever.';
        }
    }
    return response;
 }
}

module.exports = lazyGuy;