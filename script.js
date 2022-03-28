// // Câu 01: Đăng kí User ID > 
// // Yêu cầu 01: Required
// // Yêu cầu 02: Độ dài thuộc [5, 12] 
//     // Cách 01: Ko dùng biểu thức chính qui
//     // Cách 02: Có dùng biểu thức chính qui

// // Lưu ý: Kiểu phần tử Submit có hành động mặc định gửi dữ liệu đi

let userID = document.getElementById('txtUserID');
let statusOfUserID = document.getElementById('statusOfUserID')
//let userID = document.querySelector('#txtUserID')

// userID.addEventListener('focus',function(){
//     userID.style.backgroundColor = 'yellow'  
//     this.style.border = '1px solid red'
// })  

userID.addEventListener('focusout', leaveUserId)
function leaveUserId(){
//Cách 01: Ko dùng gì BTCQ
 if(userID.value.length >=5 && userID.value.length <=12){
     statusOfUserID.textContent = 'UserID invalid'
     statusOfUserID.style.color = 'blue'
 }else{
     statusOfUserID.textContent = 'Required and must be of length 5 to 12'
     statusOfUserID.style.color = 'red'
 }
}
 
//     // Cách 02: dùng BTCQ: [1, +duongvocung]
    // var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    // if(userIDRegex.test(userID.value)){
    //     statusOfUserID.textContent = 'UserID hợp lệ'
    //     statusOfUserID.style.color = 'blue'
    // }else{
    //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
    //     statusOfUserID.style.color = 'red'
    // }


// userID.onchange = function(){
//     alert('Bạn vừa thay đổi UserID và thoát khỏi UserID')
// }

// Cách làm 02: Chỉ xử lý khi nhấp Submit

// function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//     let userID = document.getElementById('txtUserID');
//     let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         return true
//     }
//     return false
// }

// function checkPassword(){
//     let password = document.getElementById('txtPassword');
//     let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
//     if(passwordRegex.test(password.value)){
//         return true
//     }
//     return false
// }
// // Tương tự sẽ có 9 hàm check khác

// let register = document.getElementById('btnRegister')

// register.addEventListener('click', function(e){
//     e.preventDefault()
//     let statusOfUserID = document.getElementById('statusOfUserID')
//     let statusOfPassword = document.getElementById('statusOfPassword')
//     if(checkUserId() == true){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }

//     if(checkPassword() == true){
//         statusOfPassword.textContent = 'Password hợp lệ'
//         statusOfPassword.style.color = 'blue'
//     }else{
//         statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
//         statusOfPassword.style.color = 'red'
//     }
// })

// Cách 03: Sử dụng thư viện jQuery
// Cú pháp jQuery: $(SELECTOR).ACTION()
// $(document).ready(function(){

//     function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//         let userID = $('#txtUserID').val();
//         let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//         if(userIDRegex.test(userID)){
//             return true
//         }
//         return false
//     }

//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkUserId()){
//             $("#statusOfUserID").text('UserID hợp lệ')
//             $("#statusOfUserID").css('color','blue')
//         }else{
//             $("#statusOfUserID").text('UserID không hợp lệ')
//             $("#statusOfUserID").css('color','red')
//         }
//     })
// })
let password = document.getElementById('txtpassword');
let statusOfPassword = document.getElementById('statusOfpassword')

password.addEventListener('focusout', leavepassword)
function leavepassword(){   
 if( password.value.length >=7 && password.value.length <=12){
    statusOfPassword.textContent = 'password invalid'
    statusOfPassword.style.color = 'blue'
 }else{
    statusOfPassword.textContent = 'Required and must be of length 7 to 12'
    statusOfPassword.style.color = 'red'
 }
}

let Name = document.getElementById('txtName');
let statusOfName = document.getElementById('statusOfName')

Name.addEventListener('focusout', leaveName)
function leaveName(){   
    var Nameregex = /^[a-zA-Z ]{2,30}$/;
 if( Nameregex.test(Name.value)){
    statusOfName.textContent = 'Name invalid'
    statusOfName.style.color = 'blue'
 }else{
    statusOfName.textContent = 'Required and alphabates only'
    statusOfName.style.color = 'red'
 }
}

let Address = document.getElementById('txtAddress');
let statusOfAddress = document.getElementById('statusOfAddress')

Address.addEventListener('focusout', leaveAddress)
function leaveAddress(){   
 if( Address.value.length <1){
    statusOfAddress.textContent = 'Optional'
    statusOfAddress.style.color = 'red'
 }
}

let about = document.getElementById('txtabout');
let statusOfabout = document.getElementById('statusOfabout')

about.addEventListener('focusout', leaveabout)
function leaveabout(){   
 if( about.value.length <1){
    statusOfabout.textContent = 'Optional'
    statusOfabout.style.color = 'red'
 }
}




let zipcode = document.getElementById('txtzipcode');
let statusOfzipcode = document.getElementById('statusOfzipcode')

zipcode.addEventListener('focusout', leavezipcode)
function leavezipcode(){   
    var zipcoderegex = /^[0-9]+$/;
 if( zipcoderegex.test(zipcode.value)){
    statusOfzipcode.textContent = 'Zip code invalid'
    statusOfzipcode.style.color = 'blue'
 }else{
    statusOfzipcode.textContent = 'Required. Must be numeric only.'
    statusOfzipcode.style.color = 'red'
 }
}

let email = document.getElementById('txtemail');
let statusOfemail = document.getElementById('statusOfemail')

email.addEventListener('focusout', leaveemail)
function leaveemail(){   
    var emailregex = /\S+@\S+.\S+/;
 if( emailregex.test(email.value)){
    statusOfemail.textContent = 'Email invalid'
    statusOfemail.style.color = 'blue'
 }else{
    statusOfemail.textContent = 'Required. Must be a valid email.'
    statusOfemail.style.color = 'red'
 }
}

function checksex(){
    x=0;
    let Msex = document.getElementById('txtMsex');
    let Fsex = document.getElementById('txtFsex')
    if(Msex.checksex){
        x++;
    }
    if(Fsex.checksex){
        x++;
    }
    if(x==0){return false}
}


function checklanguage(){
    x=0;
    let language = document.getElementById('txtlanguage');
    let Nonlanguage = document.getElementById('txtNonlanguage')
    if(language.checklanguage){
        x++;
    }
    if(Nonlanguage.checklanguage){
        x++;
    }
    if(x==0){
        return false
    }
}
function checkcountry(){
    let country = document.getElementById('txtcountry')
    if(country== 'select'){
        return false
    }
}
let submit = document.getElementById('btnsubmit')

submit.addEventListener('click', function(e){
    e.preventDefault()
    let statusOfsex = document.getElementById('statusOfsex')
    let statusOflanguage = document.getElementById('statusOflanguage')
    let statusOfcountry = document.getElementById('statusOfcountry')
    if(checksex() == false){
        statusOfsex.textContent = 'Required'
        statusOfsex.style.color = 'red'
    }
    if(checkcountry() == flase){
        statusOfcountry.textContent = 'Required'
        statusOfcountryx.style.color = 'red'
    }

    if(checklanguage() == false){
        statusOflanguage.textContent = 'Required'
        statusOflanguage.style.color = 'red'
    }
    
})
