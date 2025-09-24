let users = ["admin","abc"]
let pass = ["admin@123","htfrgnh"]


let btn1=document.getElementById("b")
let btn2=document.getElementById("c")
let con=document.getElementsByClassName("container")[0];
let heading=document.getElementsByTagName("h3")[0];
let r=document.getElementById("n");
let v=document.getElementById("j");
let index = -1
btn1.addEventListener("click",(e)=>{
e.preventDefault();
let f_value=v.value;
heading.style.display = "flex";
setTimeout(() => {
for (let i=0; i<users.length; i++)
   if(f_value===users[i])
   {
    heading.innerText="Username found" 
    r.style.display="block";
    btn2.style.display="block";
    index = i;
    break;
   }

   else {
        heading.innerText = "Username not found";
        r.style.display = "none";
        btn2.style.display = "none";
   }
    },3000)})



btn2.addEventListener("click",()=>{

    
    let s_value=r.value;

    heading.innerText="Validating password";
    if (s_value===pass[index]){
        heading.innerText="Welcome Brar";
    }
    else{
        console.log("Wrong Password")
    }
        
});
