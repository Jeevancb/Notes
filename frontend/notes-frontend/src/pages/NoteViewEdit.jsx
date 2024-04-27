import React, {useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";

function NoteViewEdit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/notes/${id}/`)
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching note", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/notes/${id}/`, { title, content })
      .then((response) => {
        console.log(response.data);
        // Redirect or update the UI after successful update
      })
      .catch((error) => {
        console.error("Error updating note", error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-1/2 h-1/2 ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{toggle? <h1>View the note!</h1>:<h1>Edit the note!</h1>}</h1>
          </div>
          <div className="card shrink-0  w-full shadow-2xl bg-base-100">
            
              
            
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Edit</span>
              </label>
              <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  onChange={() => setToggle(!toggle)} 

                />
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  required
                  readOnly={toggle}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content"
                  required
                  readOnly={toggle}
                  className="textarea textarea-bordered textarea-lg w-full h-60"
                ></textarea>
              </div>
              <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                disabled={toggle}
                type="submit"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Update
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Updated!</h3>
          <p className="py-4">
            there you go you have successfully update this note!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn">Close</Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default NoteViewEdit;
