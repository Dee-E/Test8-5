const first= html.getElementById('first');
const last=html.getElementById('last');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const age=html.getElementById('age');
const out=document.getElementById('out');
const btn =document.getElementById('btn');
const refreshbtn =document.getElementById('rbtn');
const allUser=[]
class user {
    constructor(){
        this.firstName = first.value;
        this.lastName =last.value;
        this.email =email.value;
        this.phoneNumber=phone.value;
        this.age=age.value;
    }
}
const func = ()=>{
   // console.log("keep trying");
    document.body.style.background ='lightblue';
   const user1 = new user()
   console.log(user1);
   allUser.push(user1);
   let str=(`Hello,${user1.firstName} ${user1.lastName}. We will contact you at ${user1.email} or via phone at ${user1.phoneNumber}.`);
   console.log(str);
   out.innerHTML=str;
   console.log(allUser);
}
btn.addEventListener('click',func);
const refresh = ()=>{
     console.log("keep trying");
     console.log('please refresh');
     first.value= html.getElementById('first');
     last.value=" ";
     email.value=" ";
     phone.value=" ";
     age.value=" ";
     out.value=" ";
 }
 console.log(`${first} ${last} ${email} ${phone}`);
 refresh();
 refreshbtn.addEventListener('click',()=> {
     document.body.style.backgroundColor='white';
     document.getElementById('first').value="";
     last.value='';
     email.value='';
     phone.value='';
     age.value='';
     out.innerHTML='';
     })
