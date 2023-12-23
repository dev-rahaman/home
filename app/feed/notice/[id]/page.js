"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const NoticeDetails = ({ params }) => {
  const [notice, setNotice] = useState([]);
  console.log(params);

  useEffect(() => {
    fetch("http://localhost:5000/notice")
      .then((res) => res.json())
      .then((data) => {
        setNotice(data);
      });
  }, []);

  const findNotice = notice.find((item) => item._id === params.id);

  return (
    <div className="ms-24 ">
      <div className="lg:w-[500px]">
        <div className="border-b pb-5 border-dashed">
          <Image
            src={
              "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
            }
            alt="notice"
            width={100}
            height={100}
          />
          <div className="text-center mt-5">
            <h3 className="lg:text-3xl text-2xl font-bold">
              {findNotice?.schoolPlace}
            </h3>
            <h2>{findNotice?.schoolWebsite}</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Establish {findNotice?.schoolEstablish}</p>
          <p>Date {findNotice?.noticeDate}</p>
        </div>
        <div>
          <h2 className="text-center text-4xl font-bold mt-20 underline mb-6">
            Notice No. {findNotice?.noticeNo}
          </h2>
          <p>
            {parse(`<div className="inlineContent">${findNotice?.value}</div>`)}
          </p>
        </div>
        <div className="flex justify-end mt-20">
          <div className="flex items-center justify-center flex-col">
            <Image
              src={
                "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
              }
              alt="notice"
              width={50}
              height={50}
            />
            <h2>Head teacher:</h2>
            <h5 className="text-xl"> {findNotice?.principalName}</h5>
            <h5> {findNotice?.schoolPlace}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
