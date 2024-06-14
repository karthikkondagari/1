import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import noteContext from "../Context/Notes/noteContext";
function Noteitem(props) {
  const { notes, updateNote } = props;
  const { deleteNote } = useContext(noteContext);
  const isoDate = notes.createdAt;
  const dateObj = new Date(isoDate);
  const formattedDate = dateObj.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const handleDelete = () => {
    deleteNote(notes._id);
    props.showAlert("Deleted Successfully", "success");
  };
  return (
    <div className="col md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{notes.description}</p>
          <p className="card-text">{notes.tag}</p>
          <p className="card-text">{formattedDate}</p>

          <i
            style={{ border: "none", background: "white" }}
            onClick={handleDelete}
          >
            <FontAwesomeIcon
              icon={faTrash}
              style={{ border: "none", marginRight: "10px" }}
            />
          </i>
          <i
            style={{ border: "none", background: "white" }}
            onClick={() => updateNote(notes)}
          >
            <FontAwesomeIcon icon={faEdit} style={{ border: "none" }} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
