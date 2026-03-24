//asynchronous functions do not run immediately but run in bg until triggered by an event, timer, data arrival
//promise: failure or completion of an async function
//async makes a function return a promise
//await makes a function wait for the promise

async function loadPosts() {
  try {
    console.log("I'm trying");
    // define a response to the fetch (async function that returns a promise that gets the post data)
    const response = await fetch('list.json');

    //convert the JSON response to a JS object posts
    const posts = await response.json();

    //get the container for blogs on blog.html
    const container = document.getElementById('posts');

    //loop through the JSON file, defining a lambda function to do the looping
    posts.forEach(function (posts) {
      //create a div for the post and add it to the post class for styling
      var postDiv = document.createElement('div');
      postDiv.classList.add('post');

      //fill the div with the post data
      postDiv.innerHTML =
        '<h2><a href="post.html?id=' +
        post.id +
        '">' +
        post.title +
        '</a></h2>' +
        '<p>' +
        post.summary +
        '</p>' +
        '<small>' +
        post.date +
        '</small>';

      container.appendChild(postDiv);
    });
  } catch() {
    console.error('Error loading posts:', error);
    container.innerHTML =
      '<p>Failed to load posts. See console for error information.</p>';
  }
}

loadPosts();
