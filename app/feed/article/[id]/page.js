"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const ArticleDetails = ({ params }) => {
  // console.log(params.id);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/article")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  const findArticle = articles.find((item) => item._id === params.id);

  return (
    <>
      <div className="lg:space-y-6  ">
        <h2 className="lg:text-3xl md:text-3xl text-2xl lg:font-bold ">
          {findArticle?.title}
        </h2>
        <Image
          src={"/image3.jpg"}
          // src={`${findArticle?.photo}`}
          alt="blogs images"
          width={5000}
          height={5000}
        />
        <div>{parse(`${findArticle?.value}`)}</div>
      </div>
    </>
  );
};

export default ArticleDetails;

{
  /* <div className="lg:space-y-6 my-10">
      <h2 className="lg:text-3xl md:text-3xl text-2xl lg:font-bold ">
        How to Return Results from a Python Function to Your Program When a
        Library is Blocking the Way
      </h2>
      <Image
        src={"/image3.jpg"}
        alt="blogs images"
        width={5000}
        height={5000}
      />
      <h2 className="text-2xl">
        Usually a Python function passes its results back using a return
        statement.
      </h2>
      <p>
        The problem is that sometimes it can't, so you need to figure out a
        different way to return those results. This happens, most often, when
        someone else's library's interface is in the way, and you can't change
        it. What you need to accomplish might be called passing results
        out-of-band, in a side-stream, circumventing, bypassing, or doing an
        end-run. This tutorial describes this problem at several levels of
        difficulty, then provides several solutions to handle those levels,
        including one not to use, and why. There is advice on how use as few as
        possible different solutions to cover the problem in your project. This
        is a long article, because it walks you through a progression of problem
        severities and their solutions. However, you might only need the
        beginning, one or two of the solutions described, and the guidance near
        the end.
      </p>
    </div> */
}
