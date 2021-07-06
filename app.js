const pass1 =document.getElementById('pass')
const pass2 = document.getElementById('repass')
const btn = document.getElementById('saveBtn')
const mssgdiv = document.getElementById('message')
let password,re_password;

pass1.addEventListener('input',()=>{  
    password = pass1.value
    
    password === re_password ? (
       pass1.style.backgroundColor = 'rgba(32,178,170,0.4)',
       pass2.style.backgroundColor = 'rgba(32,178,170,0.4)') 
       : 
       (pass1.style.backgroundColor = 'rgba(255,69,0,0.3)',
       pass2.style.backgroundColor = 'rgba(255,69,0,0.3)' )
})
pass2.addEventListener('input',()=>{  
    re_password = pass2.value
    password === re_password ? (
        pass1.style.backgroundColor = 'rgba(32,178,170,0.4)',
        pass2.style.backgroundColor = 'rgba(32,178,170,0.4)') 
        :
        (pass1.style.backgroundColor = 'rgba(255,69,0,0.3)',
        pass2.style.backgroundColor = 'rgba(255,69,0,0.3)' ) 
})
 
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let message;
    password.length && re_password.length > 5 ? (
        password !== re_password ? (
            message = "Your Password didn't matched")
             :
              (message = 'Your data is submitted')
           ) :
         (message = 'Password must be at least 6 characters')

    mssgdiv.textContent = message

    pass1.value = ''
    pass2.value = ''
    
    pass1.style.backgroundColor = 'white'
    pass2.style.backgroundColor = 'white'
})

