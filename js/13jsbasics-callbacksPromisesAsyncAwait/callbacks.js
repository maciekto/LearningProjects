import { setData  }from '/promisesAndAsyncAwait.js';

// let Posts = [
//     {title: 'Post one', body: 'This is a first post'},
//     {title: 'Post two', body: 'This is a second post'}
// ];

// function getPosts(){
//     setTimeout(() => {
//         let output = ``;
//         Posts.forEach((post, index) =>{
//             output += `<p>${post.title}, ${post.body}</p>`;
//         });  
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createNewPost(newPost, callback){
//     setTimeout(() => {
//         Posts.push(newPost);
//         callback();
//     }, 2000);
// }

//createNewPost(newPost, getPosts);

setData.forEach(element => {
    document.body.innerHTML = `<p>${element}asdfsdf</p>`;
});;