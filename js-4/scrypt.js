async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts: " + response.status);
    }

    const posts = await response.json();

    renderPosts(posts.slice(0, 15));
  } catch (error) {
    console.log("Nastana greshka: " + error);
  }
}

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts");
  if (!postsContainer) return;

  postsContainer.innerHTML = posts
    .map(
      (post) => `
        <div class="post ${post.id % 2 === 0 ? "even" : ""}">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            ${
              post.id % 2 !== 0
                ? `<img class="absolute" src="https://media.istockphoto.com/id/1167494424/vector/red-vector-sticker-on-sale-now.jpg?s=612x612&w=0&k=20&c=QMIXi66bOM4XiYEIamBp76tgAjhBNjWuINh67C91VO8=" alt="Sale"/>`
                : ""
            }
        </div>
    `,
    )
    .join("");

  const allPosts = document.querySelectorAll(".post");

  allPosts.forEach((post) => {
    post.addEventListener("click", () => {
      post.classList.toggle("even");
    });
  });
}

getPosts();

const titleEl = document.getElementById("title");
if (titleEl) {
  titleEl.innerHTML = "<span>Posts Board</span>";
}
