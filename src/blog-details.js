const detailsHeader = document.querySelector(".blog-header");
const detailsContent = document.querySelector(".blog-post");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://ca-cms-sofie.flywheelsites.com/wp-json/wp/v2/posts/${id}`;

async function fetchBlogDetails() {
  try {
    const response = await fetch(url);
    const blogDetails = await response.json();

    showBlogDetails(blogDetails);
  } catch (error) {
    console.log(error);
  }
}

function showBlogDetails(blogDetails) {
  const title = blogDetails.title.rendered;
  const content = blogDetails.content.rendered;

  detailsHeader.innerHTML = `<h1>${title}</h1>`;
  detailsContent.innerHTML = content;
}

fetchBlogDetails();
