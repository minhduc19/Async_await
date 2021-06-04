const posts = [
	{title: "Post one", body: "This is post one"},
	{title: "Post two", body: "This is post two"},
];

//dump posts to HTML 
function getPosts() {
	setTimeout(()=>{
		let output = "";
		posts.forEach((post,index) => {
			output += `<li>${post.title}</li>`
		});
		document.body.innerHTML = output;
	},1000);
}

function test(){
	console.log("test")
}

//append a post to the list
function createPosts(post) {
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			posts.push(post);
			console.log(posts);
			const error = false;
			if (!error){
				resolve();
			}else{
				reject("something is not right");
			}
		},2000)
		
	});
}

async function init(){
	let newPost = {title: "Post three", body: "This is post three"};
	await createPosts(newPost);
	getPosts()
}

async function fetUser(){
	const promise4 = await fetch('https://jsonplaceholder.typicode.com/users');
	const res = await promise4.json();
	console.log(res); 
}
init();
fetUser();