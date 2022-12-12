

/*======== Like increase =========*/

function increase(likerec,dislikerec,thumbsuprec,thumbsdownrec)
{
	var idname1=likerec;
	var idname2=dislikerec;
	var thumbsup=thumbsuprec;
	var thumbsdown=thumbsdownrec;
	var like=document.getElementById(idname1);
	like.innerHTML=parseInt(like.innerHTML)+1;
	var up=document.getElementById(thumbsup);
	up.style.color= "#009688";
	up.style.pointerEvents="none";
	var down=document.getElementById(thumbsdown)
	if(down.style.color=="rgb(0, 150, 136)")
	{
		var dislike=document.getElementById(idname2);
		dislike.innerHTML=parseInt(dislike.innerHTML)-1;
	}
	down.style.color="black";
	down.style.pointerEvents="all";
}

/*============== Like decrease ================*/
function decrease(likerec,dislikerec,thumbsuprec,thumbsdownrec)
{
	var idname1=likerec;
	var idname2=dislikerec;
	var thumbsup=thumbsuprec;
	var thumbsdown=thumbsdownrec;
	var dislike=document.getElementById(idname2);
	dislike.innerHTML=parseInt(dislike.innerHTML)+1;
	var down=document.getElementById(thumbsdown);
	down.style.color= "#009688";
	down.style.pointerEvents="none";
	var up=document.getElementById(thumbsup);
	if(up.style.color=="rgb(0, 150, 136)")
	{
		var like=document.getElementById(idname1);
		like.innerHTML=parseInt(like.innerHTML)-1;
	}
	up.style.color="black";
	up.style.pointerEvents="all";
}


// load view image to be posted
 var loadFile = function(event) {
	    var output = document.getElementById('load2');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };

// changing imagebutton color on hover
 function onbuttoncolor()
 {
 	var on=document.getElementById("imgbttn");
 	on.style.backgroundColor = "#009688";
 	on.style.color="white";
 }

// chaging imagebutton color on hover out
 function outbuttoncolor()
 {
 	var out=document.getElementById("imgbttn");
 	out.style.backgroundColor = "white";
 	out.style.color="black";
 }


 //Username

const a = JSON.parse(window.localStorage.getItem('UserData'));
const img= a.image;
document.getElementById('sideimg').src= img;
// document.getElementById('userimg').src= img;
document.getElementById('sidename').innerHTML=a.username;
// document.getElementById('name').innerHTML=a.username;
document.getElementById('ssn').innerHTML=a.email;




//logout

function logout()
{
window.history.forward();
}
setTimeout("logout()",0);




//fetching posts
async function getPost(){
const allComment = await fetch('https://dummyjson.com/posts');
 
const newCommentApi =await allComment.json();
// console.log(newCommentApi,"new comment api")
localStorage.setItem("Posts",JSON.stringify(newCommentApi))
}

getPost();



//diplaying fetched posts in html	

const allpost=JSON.parse(localStorage.getItem('Posts'))
// console.log(allpost,"allpost")
// console.log(allpost.posts[0].title);
const content = document.getElementById("mainpost");



const showpost = allpost.posts.map((post,index)=>{
	return `
	<p id="heading" ><mark><b>User's ID:</b></mark>${post.userId}</p>
	<div id="style" style="box-shadow: 0 0 10px;padding:10px">

	<h4 id="heading">${post.title}</h4>

	<p id="body">${post.body}</p>
	</div>
	 <div class="likedislike">
	 <p id="reaction"><mark><b>Reactions:</b></mark> ${post.reactions}</p>

	 <p class="like">
		<span class="nooflike" id="like1">0 </span> likes &nbsp <span class="noofdislike" id="dislike1">0 </span> dislikes
	</p>
	<p class="likedisbttn">
		<span id="thumbsup1" class="fa fa-thumbs-up" onclick="increase('like1','dislike1','thumbsup1','thumbsdown1');"></span> <span id="thumbsdown1" class="fa fa-thumbs-down" onclick="decrease('like1','dislike1','thumbsup1','thumbsdown1');"></span>
	</p>
	

</div> 


	`
})
content.innerHTML=showpost
// console.log(allpost.posts);




//Fetching comments

async function getcomments(){
	const allComment = await fetch('https://dummyjson.com/comments');
	 
	const comments =await allComment.json();
	// console.log(comments,"new comment api")
	localStorage.setItem("Comments",JSON.stringify(comments))
	}
	
	getcomments();


	const allcomments=JSON.parse(localStorage.getItem('Comments'))

const showcomment = document.getElementById("likedislike");



// const displayCmnt = allcomments.comments.map((post,index)=>{
// 	return `
// 	<p>${post.body}</p>

// 	`
// })
// showcomment.innerHTML=displayCmnt



