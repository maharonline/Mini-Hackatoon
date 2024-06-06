const inputFieldValue = (id) => {
    return document.getElementById(id).value

}

const users = []
// const randomid=Math.random().toString(36).slice(2)

const handlelogin = () => {
    event.preventDefault()
    let email = inputFieldValue("email")
    let password = inputFieldValue("password")

    const user = {
        email: email,
        password: password,

    }
    if (!email) {
        notify("Please Enter Email!","error")
        return
    }
    if (!password) {
        notify("Please Enter Password!","error")
        return
    }

    let userstorage=JSON.parse(localStorage.getItem('user'))

    let isuserfound = userstorage.find(check => check.email === user.email && check.password === user.password)
    if (!isuserfound) {
        notify("Please Signup First!","error")
        return
    }

    else if(isuserfound){
        const logedinuser={
            email:user.email

        }
        localStorage.setItem("user1",JSON.stringify(logedinuser))
        notify("Login Successfully","success")
        setTimeout(()=>{

            document.getElementById("headpage").innerHTML=window.location.href="todo.html"
        }, 1000)
        
        
    }
    // document.getElementById("loginpage").style.display='none'
    // document.getElementById("logout").style.display='block'
    // document.getElementById("headpage").style.display='block'
    // document.getElementById("headpage").innerHTML='Welcome Back!'+user.email
    

    
    
    // localStorage.getItem(users)
    console.log(user);
    console.log(users);



}

//Sign up Page

const handlesignup = () => {
    event.preventDefault()
    let email = inputFieldValue("email")
    let password = inputFieldValue("password")
    let confirm = inputFieldValue("confirm")

    const user={
        email:email,
        password:password,
        confirm:confirm,
        id:Math.random().toString(36).slice(2),
        status:"Active",
        datacreatred:new Date()
    }

    if(!email){
        // alert("Email likh pai")
        notify("Plese Enter Your Email!","error")
        return
    }
    if(!password || !confirm){
        // alert("password likh pai")
        notify("Please Enter Your Password","error")
    }
    if(password!=confirm){
        notify("Please Enter Your Correct Password","error")
        return 
    }
    if(password.length && confirm.length<6 ){
        notify("Please Write Strong Password","error")
        return
    }

    let isuserfound=users.find(check=>check.email===user.email && check.password===user.password)
    if(isuserfound){
        // alert("Already Signedup!Please Login")
        return notify("Already Signedup!Please Login","error")
    }
    users.push(user)
    let local=localStorage.setItem("user",JSON.stringify(users))
    // local.push(localStorage.setItem("user",JSON.stringify(users)))
    
    notify("Succcessful Signed Up!","success")

    
}


    const notify=(msg,icon)=>{
        Swal.fire({
            title: msg,
            // text: "You clicked the button!",
            icon: icon
          });

    }

