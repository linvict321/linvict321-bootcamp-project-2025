//const blogContainer = document.getElementById('blog-container');
var blog = [
    {
        title: "Blog",
        date: "10-16-2025",
        description: "blog",
        image: "apple1.jpg",
        imageAlt: "imageAlt",
        slug: "blog/apple1.html",
    },
    {
        title: "Blog2",
        date: "10-16-2025",
        description: "blog2",
        image: "apple2.jpg",
        imageAlt: "imageAlt",
        slug: "blog/apple2.html",
    }
];
var blogContainer = document.getElementById("blog-container");
blog.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.style.width = '200px'; // 
    image.style.height = 'auto';
    var title = document.createElement("h2");
    title.textContent = blog.title;
    var description = document.createElement("p");
    description.textContent = blog.description;
    var link = document.createElement("a");
    link.href = blog.slug;
    link.textContent = "Read More";
    blogDiv.append(image, title, description, link);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
