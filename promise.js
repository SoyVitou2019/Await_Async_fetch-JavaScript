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



function createPost(post){

    return new Promise((resovle, reject) =>{
        setTimeout(() =>{

            posts.push(post);

            const error = false;

            if(!error){
                resovle();
            }else{
                reject("Error: Do somethin when wrong !");
            }
        }, 2000)
    });
    
}

// Await / Async / fetch

async function fetchUser(){
    
    const respone = await fetch ('https://jsonplaceholder.typicode.com/users');

    const data = await respone.json();

    console.log(data)
}

fetchUser();
// createPost({title:"Post three", body:"This is Post three"})
// .then(getPosts)
// .catch(err => console.log(err));

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resovle, reject) =>{
//     setTimeout(resovle, 2000,"Goodbye");
// })

// Promise.all([promise1,promise2, promise3]).then((values) => console.log(values));