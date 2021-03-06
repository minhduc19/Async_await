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
			const error = true;
			if (!error){
				resolve();
			}else{
				reject("something is not right");
			}
		},2000)
		
	});
}

let newPost = {title: "Post three", body: "This is post three"};
createPosts(newPost).then(getPosts).catch(err => {console.log(err)}); // do createPosts first then do getPosts then do test asynchronously

const promise1 = Promise.resolve("hello");
const promise2 = "10";
const promise3 = new Promise((resolve,reject)=>{
	setTimeout(resolve,2000,"goodbye")
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => {return res.json()}); // curl braces require keyword return

Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values))