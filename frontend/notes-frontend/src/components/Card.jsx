import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Card({ id, title, content }) {
  function handledelete() {
    axios
      .delete(`http://127.0.0.1:8000/api/notes/${id}/`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error deleting notes", error);
      });
    document.getElementById("my_modal_3").showModal();
    console.log('deleted')
  }
  return (
    <div
      key={id}
      className="card bg-base-100 shadow-xl m-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 "
    >
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={`/note/${id}`}>view/edit</Link>
          </li>

          <li>
            <button onClick={handledelete}>
              delete
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <a href='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
    </form>
    <h3 className="font-bold text-lg">deleted!</h3>
    <p className="py-4">successfully deleted!  click on ✕ button to close</p>
  </div>
</dialog>
    </div>
  );
}

export default Card;
