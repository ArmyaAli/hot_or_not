import React from "react";

const App = () => {
  return (
    <div>
      <form action="http://127.0.0.1:8080" method="post" encType="multipart/form-data">
        <div>
          <label>Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Gender: </label>
          <select name="Gender">
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
            <input type="checkbox"  name="cat[]" value="Streamer"/>
            <label>Streamer</label>
            <input type="checkbox"  name="cat[]" value="Youtubers"/>
            <label>Youtubers</label>
            <input type="checkbox"  name="cat[]" value="Porn Stars"/>
            <label>Porn Stars</label>
            <input type="checkbox"  name="cat[]" value="Celebrities"/>
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
};

export default App;
