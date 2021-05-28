import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';

export const SubmissionPage = () => {
  const [img, setImg] = useState<string>();
  
  const hitEndpoint = async () => {
    const response = await axios
      .get("http://localhost:8080")
      .then(function (response) {
        console.log(response);
        setImg(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    hitEndpoint();
  }, []);

  return (
    <div>
      {ReactHtmlParser(img!)}
      <form
        action="http://127.0.0.1:8080"
        method="post"
        encType="multipart/form-data"
      >
        <div>
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Gender: </label>
          <select name="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="NB">Non-Binary</option>
          </select>
        </div>
        <div>
          <label>
            <b>Categories</b>
          </label>
          <div>
            <input type="checkbox" name="cat0" value="Streamers" />
            <label>Streamer</label>
            <input type="checkbox" name="cat1" value="Youtubers" />
            <label>Youtubers</label>
            <input type="checkbox" name="cat2" value="Porn Stars" />
            <label>Porn Stars</label>
            <input type="checkbox" name="cat3" value="Celebrities" />
            <label>Celebrities</label>
          </div>
        </div>
        <div>
          <label>Image: </label>
          <input type="file" name="image" />
        </div>
        <div>
          <input type="Submit" />
        </div>
      </form>
    </div>
  );
}