$(function(){
    $('.email').blur(() => {
        validate('.email')
    })
    $('.password').blur(() => {
        validate('.password')
    })
    $('.confirmPassword').blur(() => {
        validate('.confirmPassword')
    })
})

validate = (element) =>{
    let check = true
    let message
    if (element==='.email'){
        message = 'địa chỉ email'
    }
    if (element==='.password'){
        message = 'mật khẩu'
    }
    if (element==='.confirmPassword'){
        message = 'mật khẩu'
    }
    if (!isRequired(element, message)) {
        check = false
    }

    if (check === true && element==='.email') {
        if (!isEmail('.email')) {
            check = false
        }
    }

    if (check === true && element==='.password') {
        if (!isPassword('.password')) {
            check = false
        }
    }
    if (check === true && element==='.confirmPassword') {
        if (!isConfirmed('.password', '.confirmPassword')) {
            check = false
        }
    }
}

isRequired=(selector, selectorMessage) =>{
    const value = $(selector).val().trim()
    $(selector).next().empty()
    if(!value){
        $(selector).next().html('Vui lòng nhập ' + selectorMessage)
        return false
    }
    return true
}

isEmail=(emailSelector) =>{
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const value = $(emailSelector).val().trim()
    $(emailSelector).next().empty()
    if(!regex.test(value)){
        $(emailSelector).next().html('Vui lòng nhập đúng định dạng email')
        return false
    }
    return true
}

isPassword = (passwordSelector) => {
    const password = $(passwordSelector).val()
    if (password.length < 6) {
        $(passwordSelector).next().html('Mật khẩu phải lớn hơn 6 kí tự')
        return false
    }
    return true
}

isConfirmed=(passwordSelector, passwordConfirmSelector) => {
    const password = $(passwordSelector).val()
    const passwordConfirm = $(passwordConfirmSelector).val()
    if (password !== passwordConfirm) {
        $(passwordConfirmSelector).next().html('Mật khẩu nhập lại không trùng khớp')
        return false
    }
    return true
}