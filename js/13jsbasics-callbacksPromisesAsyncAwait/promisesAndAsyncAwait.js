

let Posts = [
    {title: 'Post one', body: 'This is a first post'},
    {title: 'Post two', body: 'This is a second post'}
];

function getPosts(){
    setTimeout(() => {
        let output = ``;
        Posts.forEach((post) =>{
            output += `<p>${post.title}, ${post.body}</p>`;
        });  
        document.body.innerHTML = output;
    }, 1000);
}

function createNewPost(newPost){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            Posts.push(newPost);

            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error');
            }
        }, 2000);
    })
    
}
// Async/Await

// async function init(){
//     await createNewPost({title: 'Post three', body: 'This is a third post'});

//     getPosts();
// }
// init();

// Async /Await In fetchAPI

/*async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);
}
getUsers();*/





//     .then(getPosts)
//     .catch(err => console.log(err));

// Promise.all

// const Promise1 = Promise.resolve('Hello World');
// const Promise2 = 10;
// const Promise3 = new Promise((resolve, reject)=> {
//     return setTimeout(resolve, 2000, 'GOODBYE');
// })
// const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// Promise.all([Promise1, Promise2, Promise3, Promise4]).then(values => console.log(values));
// let setData = [];
// const Promise5 = fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data => setData.push(data));
// console.log(setData);

//console.log(Promise5);

let setData = [];

const getPostss = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
    
}

getPostss().then((git)=> setData.push(git));
console.log(setData);
//  export {setData};

