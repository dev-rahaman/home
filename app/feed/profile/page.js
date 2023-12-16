import { redirect } from "next/navigation";
import React from "react";

const Profile = () => {
  redirect("/home/madrasapage", "replace");
  return <div></div>;
};

export default Profile;
