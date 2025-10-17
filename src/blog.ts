const blogContainer = document.getElementById('blog-container');

type blogContainer = {
    title: String;
    date : String;
    description: string;
    image: string; 
    imageAlt: string;
    slug: string;
}

const blog: blogContainer[] = [
  {
    title: "Joe",
    date: "Mama",
    description: "06-19-2000",
    image: "sky.png",
    imageAlt: "imageAlt",
    slug: "understanding-typescript",
  }
]