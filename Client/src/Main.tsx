import React from "react";

const App = () => {
  return (
    <div>
      <form action="127.0.0.1:8080" method="post">
        <div>
          <label>Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>Gender: </label>
          <select name="" id="">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="NB">Non-Binary</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <div>
            <label>Streamer</label>
            <input type="radio" />
            <label>Youtubers</label>
            <input type="radio" />
            <label>Porn Stars</label>
            <input type="radio" />
            <label>Celebrities</label>
            <input type="radio" />
          </div>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default App;
