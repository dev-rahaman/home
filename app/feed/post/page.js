"use client";
import React, { useState } from "react";
import { CloseIcon, CommentIcon, LoveIcon, ShearIcon } from "@/app/icons/icons";
import Image from "next/image";

const allPosts = [
  {
    id: "1",
    user: {
      avatar:
        "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
      name: "Jamia Rashida Madrasa",
      date: "11/16/23",
    },
    content:
      "It looks like you're trying to create a list of posts and provide a button to close each post based on its ID. However, in your current implementation, the toggleVisibility function is using a single state (isVisible) for all posts. To achieve per-post visibility, you should manage the visibility state for each post separately.",
    like: "2446",
    comment: "120",
    share: "53",
  },
  {
    id: "2",
    user: {
      avatar:
        "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
      name: "Jamia Rashida Madrasa",
      date: "11/16/23",
    },
    content:
      "To create a simple cart using JSX and Tailwind CSS for posting on social media, you can use the following code as a starting point. Make sure you have Tailwind CSS installed and properly configured in your project. To create a simple cart using JSX and Tailwind CSS for posting on social media, you can use the following code as a To create a simple cart using JSX and Tailwind CSS for posting on social media, you can use the following code as a starting point. Make sure you have Tailwind CSS installed and properly configured in your project. To create a simple cart using JSX and Tailwind CSS for posting on social media, you can use the following code as a",
    like: "2486",
    comment: "64",
    share: "23",
  },
];

const Post = () => {
  const [visiblePosts, setVisiblePosts] = useState(
    allPosts.map((post) => post.id)
  );

  const toggleVisibility = (id) => {
    setVisiblePosts((prevVisiblePosts) =>
      prevVisiblePosts.includes(id)
        ? prevVisiblePosts.filter((postId) => postId !== id)
        : [...prevVisiblePosts, id]
    );
  };

  return (
    <div className="space-y-6 mt-5">
      {allPosts.map((post) => (
        <div
          key={post.id}
          className={`max-w-bg-white p-4 shadow-lg rounded-lg flex flex-col ${
            visiblePosts.includes(post.id) ? "" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                width={80}
                height={80}
                src={post.user.avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <h2>{post.user.name}</h2>
                <p className="text-gray-700 text-sm">{post.user.date}</p>
              </div>
            </div>
            <button
              onClick={() => toggleVisibility(post.id)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="">{post.content}</div>
          <div className="flex justify-between mt-5  border-y-2 py-2">
            <div className="flex items-center flex-col">
              <p>{post.like}</p>
              <button className="block">
                <LoveIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{post.comment}</p>
              <button className="block">
                <CommentIcon />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p>{post.share}</p>
              <button className="block">
                <ShearIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
