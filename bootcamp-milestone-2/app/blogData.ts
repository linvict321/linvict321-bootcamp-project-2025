export interface Blog {
    name: ReactNode; // type also works
    title: string;
    date : string;
    description: string;
    image: string; 
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
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

export default blogs; // This will allow us to access this data anywhere!