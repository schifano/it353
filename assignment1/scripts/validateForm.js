/* JS to validate entire form */
function validateForm() {
    var isFormValid = true;
    isFormValid &= validateZip();
    isFormValid &= validateEmail();
    return isFormValid? true:false;
}