import React from 'react'
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

import blog1 from "@/assets/blogs/blog1.png"
import blog2 from "@/assets/blogs/blog2.png"
import blog3 from "@/assets/blogs/blog3.png"
import writer from "@/assets/blogs/writerAvatar.png"

const blogPosts = [
  {
    title: "Blog post title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    author: {
      name: "Azunyan U. Wu",
      avatar: writer // Assuming there's a path to the avatar image
    },
    readTime: "5min read",
    categories: ["UI/UX", "Machine Learning"],
    image: blog1 // Assuming there's a path to the blog post image
  },
  {
    title: "Blog post title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    author: {
      name: "Veronica D. White",
      avatar: writer // Assuming there's a path to the avatar image
    },
    readTime: "5min read",
    categories: ["UI/UX", "Machine Learning"],
    image: blog2 // Assuming there's a path to the blog post image
  },
  {
    title: "Blog post title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    author: {
      name: "Jesse Pinkman",
      avatar: writer // Assuming there's a path to the avatar image
    },
    readTime: "5min read",
    categories: ["UI/UX", "Machine Learning"],
    image: blog3 // Assuming there's a path to the blog post image
  }
];


const BlogPost = () => {
  return (
    <div className=" py-28 px-12 ">

      <div className='grid lg:grid-cols-2' >
        <div className="  ">
          <div className="eyebrow-text">
            Blogs
          </div>
          <div className="text-4xl font-semibold my-4">
            Latest Article
          </div>
          <div className="font-light ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, numquam ciis minima dolores, aspernatur quasi.
          </div>
        </div>
        <div className="flex justify-start lg:justify-end items-center mt-8 lg:mt-0 ">
          <Button className='' > View All Post <MoveRight className='ml-1.5' /> </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 pt-16 ">
        {
          blogPosts.map((item, idx) => {
            return (
              <BlogCards item={item} key={idx} />
            )
          })
        }
      </div>


    </div>
  )
}

export default BlogPost


const BlogCards = ({ item }: {
  item: {
    title: string;
    description: string;
    author: {
      name: string;
      avatar: StaticImageData;
    };
    readTime: string;
    categories: string[];
    image: StaticImageData;
  }
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <div className="relative ">
            <Image src={item.image} className='w-full  ' alt="" />
            <div className="absolute top-3 left-3 ">
              <div className="flex gap-2">
                {item.categories.map((i, idx) => {
                  return (
                    <div className="px-1.5 py-1 border-2 border-gray-700/30 rounded-full bg-black/50 w-fit text-white/80 text-sm md:text-base " key={idx}  > {i} </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="text-2xl font-bold my-4 ">
          {item.title}
        </div>
        <div className="">
          {item.description}
        </div>
        <div className="flex items-center justify-between my-4 ">
          <div className="flex items-center justify-start gap-x-3 ">
            <Image src={item.author.avatar} alt="" />
            {item.author.name}
          </div>
          <div className="text-muted-foreground">
            {item.readTime}
          </div>
        </div>
      </div>
    </>
  )
}