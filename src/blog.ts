//const blogContainer = document.getElementById('blog-container');

type Blog = {
    title: string;
    date : string;
    description: string;
    image: string; 
    imageAlt: string;
    slug: string;
}

const blog: Blog[] = [
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
]

const blogContainer = document.getElementById("blog-container");

blog.forEach((blog) => {
  const blogDiv = document.createElement("div");
  blogDiv.classList.add("blog");

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  image.style.width = '200px'; // 
  image.style.height = 'auto';

  const title = document.createElement("h2");
  title.textContent = blog.title;

  const description = document.createElement("p");
  description.textContent = blog.description;

  const link = document.createElement("a");
  link.href = blog.slug;
  link.textContent = "Read More";

  blogDiv.append(image, title, description, link);
  blogContainer?.appendChild(blogDiv);
});