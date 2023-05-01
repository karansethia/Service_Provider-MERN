import React from "react";
import "./AddService.scss";

const AddService = () => {
  return (
    <div className="addService">
      <div className="container">
        <h1>Add New Service</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Plumbing</option>
              <option value="web">Carpentry</option>
              <option value="animation">Technician</option>
              <option value="music">Gadgets Repair</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. Fix all the bathrooms issues" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. Fist Party tools" />
            <input type="text" placeholder="e.g. Professional workers" />
            <input type="text" placeholder="e.g. Clean work" />
            <input type="text" placeholder="e.g. Favourite in the area" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;