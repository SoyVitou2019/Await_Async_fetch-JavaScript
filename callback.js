const posts = [
    {title:"Post one", body:"This is post one"},
    {title:"Post two", body:"This is post two"},
];





function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=> {
            output += `<h2>${index + 1}, ${post.title}</h2><h3>${post.body}</h3>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}



function createPost(post,callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    }, 2000)
}


createPost({title:"Post three", body:"This is Post three"}, getPosts)



