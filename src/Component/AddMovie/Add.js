import { Button, Modal } from "react-bootstrap";
import React, {useState} from "react";
import { TextField } from "@material-ui/core";

function Add({handleAddMovie}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [newMovie, setNewMovie] = useState({
        id:Math.random(),
      title:"",
      description:"",
      posterURL:"",
      rating: 1,
    })
    console.log("newMovie",newMovie)

  return (
    <div style= {{marginRight:"auto",marginLeft:"auto",marginTop : "4%", textAlign :"center"}}>
      <Button style= {{backgroundColor: "grey"}} variant="primary" onClick={handleShow}>
        ADD New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form style={{marginTop: "6%", marginLeft:"4%"}} noValidate autoComplete="off">

            <TextField id="standard-basic"  name="title" label="Title" 
            onChange={(e) => setNewMovie({ ...newMovie, [e.target.name]: e.target.value})} />
            <TextField  id="standard-basic" name="description" label="Description"
            onChange={(e) => setNewMovie({ ...newMovie, [e.target.name]: e.target.value})}  />
            <TextField id="standard-basic"  name="posterURL" label="PosterURL" 
            onChange={(e) => setNewMovie({ ...newMovie, [e.target.name]: e.target.value})} />
            <TextField id="standard-basic"  name="rating" label="Rating" 
            onChange={(e) => setNewMovie({ ...newMovie, [e.target.name]: e.target.value})} />

      </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {handleClose();handleAddMovie(newMovie)}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
