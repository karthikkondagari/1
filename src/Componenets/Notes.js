import React, { useContext, useEffect, useState, useRef } from "react";
import noteContext from "../Context/Notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const ref = useRef(null);
  const refClose = useRef(null);
  const { notes, getallnotes, editNote } = useContext(noteContext);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  // const [createdAt,setCreatedAt]=useState('')
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem("token")) getallnotes();
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setTitle(currentNote.title);
    setDescription(currentNote.description);
    setTag(currentNote.tag);
    setId(currentNote._id);
    // setCreatedAt(Date.now());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    editNote(id, title, description, tag);
    refClose.current.click();

    // Handle your form submission logic here
    props.showAlert("Updated Notes Successfully", "success");
    setTitle("");
    setDescription("");
    setTag("");
    // setCreatedAt('');
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="container mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  title.length < 5 || description.length < 5 || tag.length < 3
                }
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length === 0 && " Start wrting yout notes"}
        </div>
        <div className="row my-3">
          {notes &&
            notes.map((note, index) => {
              return (
                <Noteitem
                  key={index}
                  notes={note}
                  updateNote={updateNote}
                  showAlert={props.showAlert}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Notes;
