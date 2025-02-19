import React from "react";
import Basic from "./../images/profileimg/Group 1000004307.png";
import school from "./../images/profileimg/school_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png";
import wexp from "./../images/profileimg/Group 1000004311.png";
import certification from "./../images/profileimg/GearSix.png";
import skill from "./../images/profileimg/Group 1000004309.png";
import documents from "./../images/profileimg/upload_file_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Details() {

  

  let details = [
    {
      img: Basic,
      heading: "Basic Details",
      link: "",
    },
    {
      img: school,
      heading: "Education Details",
      link: "education",
    },
    {
      img: wexp,
      heading: "Work Experience",
      link: "work",
    },
    {
      img: certification,
      heading: "Certifications",
      link: "certification",
    },
    {
      img: skill,
      heading: "Skill",
      link: "skill",
    },
    {
      img: documents,
      heading: "Documents",
      link: "documents",
    },
  ];

  return (
    <>
      {details.map((el, i) => {
        return (
          <NavLink key={i} to={`/${el.link}`} className={({isActive})=>{
           return isActive?"text-[#7900BA66]":""
          }} >
            <div key={i} className="flex items-center gap-1">
            <img src={el.img} alt=""  />
            <h1>{el.heading}</h1>
          </div>
          </NavLink>
        );
      })}
    </>
  );
}

export default Details;
