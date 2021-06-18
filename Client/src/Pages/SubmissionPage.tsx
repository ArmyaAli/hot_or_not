import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import './styles/SubmissionPage.css'
export const SubmissionPage = () => {

  return (
    <div>
      <Navbar />
      <form
        action="http://127.0.0.1:8080"
        method="post"
        encType="multipart/form-data"
        className="form-container"
      >
        <div>
          <label>Individual Name </label>
          <input className="name-input" type="text" placeholder="Name" name='name' />
        </div>
        <div>
          <label>Gender </label>
          <select name="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="NB">Non-Binary</option>
          </select>
        </div>
        <div>
          <label>Categories</label>
          <div className="input-container">
            <div>
              <input type="checkbox" name="cat0" value="Streamers" />
              <label>Streamer</label>
            </div>
            <div>
              <input type="checkbox" name="cat1" value="Youtubers" />
              <label>Youtubers</label>
            </div>
            <div>
              <input type="checkbox" name="cat2" value="Porn Stars" />
              <label>Porn Stars</label>
            </div>
            <div>
              <input type="checkbox" name="cat3" value="Celebrities" />
              <label>Celebrities</label>
            </div>

          </div>
        </div>
        <div>
          <div className="input-container">
            <span>Image</span>
            <input type="file" name="image" />
          </div>
        </div>
        <div>
          <input type="Submit" />
        </div>
      </form>
      <Footer />
    </div>
  );
}