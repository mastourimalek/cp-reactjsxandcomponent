import React from "react";
import mytof from "../Assets/MalekMastouri.jpg";
const ProfilePhoto = () => {
  return (
    <div>
      <img
        style={{ width: "10%", height: "10%" }}
        className="tof"
        src={mytof}
        alt="tof"
      />
    </div>
  );
};

export default ProfilePhoto;
