async function getPosts() {
    try {
      const response = await fetch('https://ca-cms-sofie.flywheelsites.com/wp-json/wp/v2/posts/');
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error(error);
    }
  }

  async function displayPosts() {
    const posts = await getPosts();
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        const author = getAuthorName(post.id);
        const postLink = `blog-details.html?id=${post.id}`;
        postDiv.innerHTML = `<a href="${postLink}"><h2>${post.title.rendered}</h2></a><p>By ${author} on ${new Date(post.date).toLocaleDateString()}</p><p>${post.excerpt.rendered}</p>`;
        postsContainer.appendChild(postDiv);
      });
    }

  function getAuthorName(postId) {
    switch (postId) {
      case 1:
        return 'Alisha Singh';
      case 2:
        return 'Naveen Kumar';
      case 3:
        return 'Maya Rodriguez';
      default:
        return 'Unknown';
    }
  }

  displayPosts();