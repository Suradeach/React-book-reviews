import React from "react";
import {  } from "react-router-dom";

// components

import Navbar from "components/Navbars/bookadd";
import BookAdding from "components/BookAdding/BookAdd.js";
import FooterSmall from "components/Footers/FooterSmall.js";


// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import Addbook from "components/BookAdding/BookAdd";



export default function Addbooks() {
  return (
     
    <>
     
      <main>
        <section className="">
          
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/books.jpg").default + ")",
                
            }}
          ><Addbook/>
            </div>
            
          
        </section>
      </main>
     
    </>
  );
}
