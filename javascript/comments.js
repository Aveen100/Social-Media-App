


const allcomments=JSON.parse(localStorage.getItem('Comments'))	;// console.log(allcomments.comments[0].body);
const showcomment = document.getElementsById("newcomment");

console.log(allcomments.comments);


// console.log(allcomments.comments);
const showcmnt = allcomments.comments.map((cmnt,index)=>{
	
	return `
		
	<p>${cmnt.body}</p>
	`

})

showcomment.innerHTML=showcmnt

