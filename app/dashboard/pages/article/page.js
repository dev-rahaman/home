"use client";
import "quill/dist/quill.snow.css";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";
import TextEditor from "../../DashboardComponents/TextEditor";
import { useState } from "react";

const AddBlog = () => {
  const [value, setValue] = useState();

  const handleArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const tags = form.tags.value;

    const newArticle = { title, photo, value, tags };

    fetch("http://localhost:5000/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleArticle} className="flex flex-col gap-y-5">
      <TextInput
        type={"text"}
        htmlFor={"title"}
        id={"title"}
        labelTitle={"Title"}
        placeholder={
          " Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        }
        name={"title"}
      />

      <TextInput
        type={"file"}
        htmlFor={"photo"}
        id={"photo"}
        labelTitle={"photo"}
        name={"photo"}
      />

      <TextEditor value={value} setValue={setValue} />

      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"Tag"}
        name={"tags"}
        placeholder={"Minimum 5 tags is required"}
      />

      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default AddBlog;
