"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/video")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-2 my-5">
      {videos.map((video, idx) => (
        <Link href={`/feed/video/${video?._id}`} key={idx}>
          <div className="relative w-[230px] h-[255px] bg-red-500 rounded overflow-hidden shadow-lg">
            <Image
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="w-[240px] h-[130px]"
            />
            <span className="absolute top-[6.50rem] right-0 bg-black text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
              27: 51
            </span>
            <div className="mt-2 flex px-1 justify-center">
              <Image
                width={30}
                height={30}
                src="/profile-image.jpg"
                alt="Profile"
                className="h-12 w-12 rounded-full mx-auto"
              />
              <div className="ml-3">
                <span className="text-center text-sm">
                  {video?.writeTittle.slice(0, 35)}
                </span>
                <p className="text-gray-800 text-sm">Dev-Rahaman</p>
                <div className="flex text-sm">
                  <p className="text-gray-800">
                    Views: {video?.writeView}&nbsp;•&nbsp;
                  </p>
                  <p className="text-gray-800">{video?.time}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Video;
