const container = document.querySelector(".container");
// console.log(container);
// // // Fetch posts from JSONPlaceholder API(Application Programming Interface c)
// fetch("https://jsonplaceholder.typicode.com/posts") //fetch :- BOM api
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // JSON:-Javascript Object Notation
    return response.json(); // Parse the JSON from the response
    // we can parse the json like JSON.parse(response) but the fetch let us provides the json() function init
  })
  .then((data) => {
    console.log("Posts:", data); // Log the data to the console
    for (let post of data) {
      const postCard = document.createElement("article");
      postCard.classList.add("post-card");
      postCard;
      let postCardContent = `
  <h2 class="post-title">${post.userId}</h2>
  <p class="post-meta">${post.id}</p>
  <p class="post-body">
      ${post.body}
  </p>
  <p class="post-id">Post ID: ${post.id}</p>
`;
      postCard.innerHTML = postCardContent;
      container.append(postCard);
    }
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
