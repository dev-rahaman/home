"use client";

import { useState } from "react";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";
import TextEditor from "../../DashboardComponents/TextEditor";

const Notice = () => {
  const [value, setValue] = useState();

  const handleNotice = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    // const value = form.value.value;
    const principalName = form.principalName.value;
    const schoolPlace = form.schoolPlace.value;
    const schoolSeal = form.schoolSeal.value;
    const noticeDate = form.noticeDate.value;
    const noticeNo = form.noticeNo.value;
    const schoolEstablish = form.schoolEstablish.value;
    const tags = form.tags.value;

    const newNotice = {
      title,
      value,
      schoolSeal,
      schoolEstablish,
      noticeDate,
      noticeNo,
      schoolPlace,
      principalName,
      tags,
    };

    fetch("http://localhost:5000/notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotice),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleNotice} className="flex flex-col gap-y-5">
      <TextInput
        type={"text"}
        htmlFor={"title"}
        id={"title"}
        labelTitle={"title"}
        name={"title"}
        placeholder={
          " Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        }
      />

      <TextEditor value={value} setValue={setValue} />

      <TextInput
        type={"text"}
        htmlFor={"principalName"}
        id={"principalName"}
        labelTitle={"principal Name"}
        name={"principalName"}
        placeholder={"Enter Principal's Name here."}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolPlace"}
        id={"schoolPlace"}
        labelTitle={"school Place"}
        name={"schoolPlace"}
        placeholder={"Enter school Place here."}
      />
      <TextInput
        type={"file"}
        htmlFor={"schoolSeal"}
        id={"schoolSeal"}
        labelTitle={"school Seal"}
        name={"schoolSeal"}
        placeholder={"Enter School Seal here."}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolEstablish"}
        id={"schoolEstablish"}
        labelTitle={"School Establish"}
        name={"schoolEstablish"}
        placeholder={"Enter School School Establish Date"}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolWebsite"}
        id={"schoolWebsite"}
        labelTitle={"school Website"}
        name={"schoolWebsite"}
        placeholder={"Enter School School Website Link"}
      />
      <TextInput
        type={"text"}
        htmlFor={"noticeNo"}
        id={"noticeNo"}
        labelTitle={"notice No:"}
        name={"noticeNo"}
        placeholder={"Enter notice No ex: 45"}
      />
      <TextInput
        type={"date"}
        htmlFor={"noticeDate"}
        id={"noticeDate"}
        labelTitle={"notice Date"}
        name={"noticeDate"}
        placeholder={"Minimum 5 tags is required"}
      />
      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"tags"}
        name={"tags"}
        placeholder={"Minimum 5 tags is required"}
      />
      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Notice;
