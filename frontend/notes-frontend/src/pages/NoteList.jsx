import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [length, setlength] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/notes/")
      .then((response) => {
        setNotes(response.data);
        setlength(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching notes", error);
      });
  }, []);
  if (length) {
    return (
      <div className="flex flex-wrap justify-center">
        {notes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        ))}

        <Link
          to="create"
          className="btn  btn-primary shadow-xl fixed bottom-5 rounded-full middle-5 m-4 p-2 w-24 h-20"
        >
          New Note
        </Link>
      </div>
    );
  } else {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">
              Effective note-taking is crucial for academic success, enhancing
              active listening, comprehension, and retention of information. It
              keeps the mind engaged, organizes information, and creates a
              concise record for study, making it easier to link classroom
              learning to textbook readings and facilitating better
              understanding and recall of material.👋🏻
            </p>
            <Link to="create" className="btn btn-primary">
              Create Note
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteList;
