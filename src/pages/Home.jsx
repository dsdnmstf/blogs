import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Blog from "../components/Blog";
import { Dashboard } from "../components/Headers";
import { getDataFromFirebase, userStateChecker } from "../firebase/firebase";

const Home = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getDataFromFirebase(setBlogs);
    userStateChecker(dispatch);
  }, []);

  return (
    <div>
      <Dashboard />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {blogs.map((blog, index) => (
          <Blog key={index} {...blog} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
