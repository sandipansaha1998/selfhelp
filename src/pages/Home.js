import React from "react";
import { useAuthContext } from "../hooks";
import MidSection from "../components/MidSection";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
const Home = () => {
  const auth = useAuthContext();

  return (
    <div className="d-flex">
      <LeftSideBar />
      <MidSection />
      <RightSideBar />
    </div>
  );
};

export default Home;
