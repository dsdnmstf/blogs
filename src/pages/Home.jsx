import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Blog from "../components/Blog";
import { Dashboard } from "../components/Headers";
import { getDataFromFirebase, userStateChecker } from "../firebase/firebase";

const Home = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getDataFromFirebase(setBlogs);
    userStateChecker(dispatch);
  }, [setBlogs, dispatch]);
  console.log(blogs);
  return (
    <div>
      <Dashboard />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {blogs.map((blog, index) => (
          <Grid key={index} item>
            <Blog {...blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
