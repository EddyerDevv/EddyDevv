"use client";

import React from "react";

import "@/styles/NotFound.css";

function NotFound() {
  return (
    <main id="page_404">
      <section className="principal">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 15l6 -6"></path>
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
          </svg>
        </span>
        <h1 className="text">Page not found</h1>
      </section>
      <section className="content">
        <h2 className="text">
          The page you are looking for does not exist, what will you do now?
        </h2>
        <div className="actions">
          <button
            className="btn"
            onClick={() => window.history.back()}
            id="btn_go_back"
          >
            Go back
          </button>
          <button
            className="btn accent"
            onClick={() => window.location.reload()}
            id="btn_retry"
          >
            Retry
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
