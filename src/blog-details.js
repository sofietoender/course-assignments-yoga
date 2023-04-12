const postsContainer = document.querySelector(".post-container");

async function fetchPosts() {
  try {
    const response = await fetch('https://ca-cms-sofie.flywheelsites.com/wp-json/wp/v2/posts/');
    const posts = await response.json();
    showPosts(posts);
  } catch (error) {
    console.log(error);
  }
}

function showPosts(posts) {
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    const postLink = `blog-details.html?id=${post.id}`;
    postDiv.innerHTML = `
      <a href="${postLink}"><h2>${post.title.rendered}</h2></a>
      <p>By ${post.author} on ${new Date(post.date).toLocaleDateString()}</p>
      <p>${post.excerpt.rendered}</p>
    `;
    postsContainer.appendChild(postDiv);
  });
}

fetchPosts();
