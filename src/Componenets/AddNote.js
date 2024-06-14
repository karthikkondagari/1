import React, { useContext, useState } from "react";
import noteContext from "../Context/Notes/noteContext";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const { addNote } = useContext(noteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, description, tag);
    props.showAlert("Note added Successfully", "success");
    setTitle("");
    setDescription("");
    setTag("");
  };

  return (
    <div className="container">
      <h1>Add a Note</h1>
      <form onSubmit={handleSubmit}>
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
        <button
          disabled={
            title.length < 5 || description.length < 5 || tag.length < 3
          }
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
