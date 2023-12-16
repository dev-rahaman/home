import Image from "next/image";
import React from "react";

const NoticeDetails = () => {
  return (
    <div className="ms-24">
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
              দারুস সুন্নাত আল মাদ্রাসা চট্টগ্রাম
            </h3>
            <h5 className="text-xl">রাজবাড়ী দিনাজ চট্টগ্রাম</h5>
            <h2>www.almadarasa.com</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <p>স্মারক নং-২০২৩</p>
          <p>তারিখ- ২৮/০৮/২০২৩</p>
        </div>
        <div>
          <h2 className="text-center text-4xl font-bold mt-20 underline mb-6">
            নোটিশ ৪৩
          </h2>
          <p>
            MongoDB এর সাথে আপনার হোম পেজে সর্বশেষ পোস্ট প্রদর্শন করতে, আপনি এই
            পদক্ষেপগুলি অনুসরণ করতে পারেন:MongoDB এর সাথে আপনার হোম পেজে সর্বশেষ
            পোস্ট প্রদর্শন করতে,
          </p>
          <p className="my-5">
            ডেটাবেস সেটআপ: নিশ্চিত করুন যে আপনার কাছে MongoDB সেট আপ আছে এবং
            আপনার পোস্টগুলি সংরক্ষণ করার জন্য একটি সংগ্রহ রয়েছে৷ আপনার যদি এখনও
            না থাকে তবে আপনি MongoDB এর শেল বা MongoDB কম্পাসের মতো একটি টুল
            ব্যবহার করে এটি তৈরি করতে পারেন।
          </p>
          <p>
            পোস্টের জন্য স্কিমা: আপনার পোস্টের জন্য একটি স্কিমা নির্ধারণ করুন।
            MongoDB-তে, এটি নমনীয় হতে পারে, তবে আপনি Mongoose (একটি MongoDB
            ORM) ব্যবহার করে একটি Node.js অ্যাপ্লিকেশনে এর মতো একটি মৌলিক কাঠামো
            সংজ্ঞায়িত করতে পারেন:
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
            <h2>প্রধান শিক্ষকঃ </h2>
            <h5 className="text-xl">আব্দুর রহমান সুলতানী </h5>
            <h5>দারুস সুন্নাত আল মাদ্রাসা চট্টগ্রাম</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
