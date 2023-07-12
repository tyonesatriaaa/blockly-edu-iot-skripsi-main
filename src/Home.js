import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: "#2E6ECD",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            position: "absolute",
            zIndex: 0,
            opacity: 0.5,
          }}
          className='shadow-img'
          src='/iot.png'
          alt='gambar'
        />

        <p
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          PEMBELAJARAN LOGIKA PEMROGRAMAN DASAR PADA IOT DEVELOPMENT BOARD
        </p>

        <button
          style={{
            backgroundColor: "#5098FF",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            padding: "1% 2%",
            boxShadow: "0 4px #dedede",
            borderRadius: "15px",
            cursor: "pointer",
            zIndex: 1,
          }}
          onClick={() => navigate("/workspace")}
        >
          Mulai Belajar
        </button>
      </div>
    </>
  );
}
