
function PhoneNumber(phoneNumber) {

    this.number = function () {
        let result ='';
        
        if(charsInPhoneNumber.length == 9)
        {
            result = null;
        }
        else {
            var charsInPhoneNumber = phoneNumber.replace(/[^0-9]+/g,"");
            result = charsInPhoneNumber;
        }
        return result;
    }
}
var phone = new PhoneNumber('(223) 456-7890');
console.log(phone.number());
module.exports = PhoneNumber;