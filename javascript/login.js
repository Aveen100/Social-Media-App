const Uname= document.querySelector('#user');
const word= document.querySelector('#pass');

async function handleformsubmission(event){
  event.preventDefault();
  
    
  const data=  await fetch('https://dummyjson.com/auth/login',  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
    
            username: `${Uname.value}`,
            password: `${word.value}`
    
  })
   
})
const res = await data.json()
localStorage.setItem("UserData" ,JSON.stringify(res))
// await (console.log)
console.log(res)
if(res.message== 'Invalid credentials')
alert('Invalid Email or Password')
else{
window.location.replace("../login/home.html");
}

// const user= fetch('https://dummyjson.com/posts');
// const post = user.json();
// localStorage.setItem("UserPosts", JSON.stringify(post))



}


console.log('hello');

// .then(res => res.json())
// .then(console.log);
            


submit.addEventListener("click",handleformsubmission) 
