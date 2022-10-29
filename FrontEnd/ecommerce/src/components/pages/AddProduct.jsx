import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import './Add.css';


function AddProduct() {
  const [url, setUrl] = useState("");
  const [product, setProduct] = useState({
    name :"",
    category :"",
    price : "",
    description :"",
    user_id :""
  });
  const [image, setImage] = useState("");

  console.log(product);
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const cloudName = "mazenkouki";

  const onClickHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", "262476154569354");
    formData.append("upload_preset", "mazenkouki");
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => {
        setProduct({ ...product, img: JSON.stringify(res.data.url) });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadHandler = () => {
    axios
      .post("http://localhost:3002/products/postP", product)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <center>
    <div className="Add">
      <div className="loginSect">
        <p>Logged In Person</p>
      </div>
    <div className="data">
        <div>
          <TextField
            id="name"
            label="Product Name"
            multiline
            maxRows={4}
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="category"
            label="Category"
            placeholder="Placeholder"
            multiline
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="price"
            label="Price"
            placeholder="Placeholder"
            multiline
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="user_id"
            label="User_id"
            multiline
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => onClickHandler(e)}
            />
            <PhotoCamera />
          </IconButton>
        </div>
        <div>
          <Button
            size="large"
            variant="contained"
            onClick={() => uploadHandler()}
          >
            upload
          </Button>
        </div>
    </div>
    </div>
    </center>
  );
}

export default AddProduct;