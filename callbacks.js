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

//append a post to the list
function createPosts(post) {
	setTimeout(() => {
		posts.push(post);
		console.log(posts);
	},2000)
}

let newPost = {title: "Post three", body: "This is post three"};
createPosts(newPost);
getPosts();
