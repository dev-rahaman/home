"use client";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";

export const Input = ({
  labelName,
  labelTitle,
  paragraph,
  name,
  inputId,
  type,
}) => {
  return (
    <div className="bg-gray-200 p-5 rounded w-[900px]">
      <label htmlFor={labelName}>{labelTitle}</label>
      <span className="block">{paragraph}</span>
      <input type={type} id={inputId} name={name} required className="w-full" />
    </div>
  );
};

const Video = () => {
  const handleArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const selectVideo = form.selectVideo.value;
    const writeTittle = form.writeTittle.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const tags = form.tags.value;

    const newClass = {
      selectVideo,
      writeTittle,
      description,
      thumbnail,
      videoView: "0",
      tags,
    };

    fetch("http://localhost:5000/video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleArticle} className="flex flex-col gap-y-5">
      {/* video */}
      <TextInput
        type={"file"}
        htmlFor={"selectVideo"}
        id={"selectVideo"}
        labelTitle={"select Video"}
        name={"selectVideo"}
        paragraph={"একটি ভিডিও সিলেক্ট করুন"}
      />

      {/* title  */}
      <TextInput
        type={"text"}
        htmlFor={"writeTittle"}
        id={"writeTittle"}
        labelTitle={"writeTittle"}
        name={"writeTittle"}
        paragraph={"ভিডিও টাইটেল"}
      />

      {/* description */}
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor={"description"}>description</label>
        <span className="block">{"ভিডিও ডেসক্রিপশন"}</span>
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          required
          className="w-full h-[300px]"
        />
      </div>

      {/* video */}
      <TextInput
        type={"file"}
        htmlFor={"thumbnail"}
        id={"thumbnail"}
        labelTitle={"thumbnail"}
        name={"thumbnail"}
        paragraph={"একটি ভিডিও থাম্বনেইল সিলেক্ট করুন"}
      />
      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"Tag"}
        name={"tags"}
        paragraph={"Minimum 5 tags is required"}
      />
      {/* playlist */}
      <select>
        <option>Select a playlist</option>
        <option>name1</option>
        <option>name2</option>
        <option>name3</option>
        <option>name4</option>
        <option>name5</option>
      </select>
      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Video;
