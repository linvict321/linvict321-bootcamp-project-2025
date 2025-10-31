import React from "react";
import Image from "next/image";
import style from "./blogPreview.module.css";

import { Blog } from "../blogData"; // importing the type/interface we defined earlier
type Props = { blog: Blog };

// Pass your props into the component here ↓↓↓
export default function BlogPreview({ blog }: Props) {
  const { title, description, image, imageAlt, date, slug } = blog;
    
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.div}>
      <h3>{blog.name}</h3>
      <div>
        {/* // <img src="./sky.jpg" alt="img" /> */}
        {/* // we will replace img with Image, made to optimize images produced with Next.js */}
        {/* Use a public-path src (files in /public are served from the site root) */}
        <Image src="/apple1.jpg" alt="img" width={500} height={500} />
        <p>Blog description</p>
        <p>Posted on...</p>
      </div>
    </div>
  );
}
