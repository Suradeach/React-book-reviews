import React, { Fragment, useState, useEffect } from "react";

import Uploadimg from "components/Uploadimage.js/UpimgButton";


import { app } from "../../firebase";

import { useHistory } from "react-router-dom";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import { addBook } from "../../lib/api";
import UploadButton from "Pages/AuthPage/components/UploadButton";




export default function Addbook() {
  
    const { sendRequest, status } = useHttp(addBook);
    const [bookImage, setBookImage] = useState(
      "https://firebasestorage.googleapis.com/v0/b/uploadimage-3aa3a.appspot.com/o/bookblank.png?alt=media&token=e4e8cdde-5fca-4761-896b-779e882793c9"
    );
 
    useEffect(() => {
      if (status === "completed") {
        console.log("send_Data")
      }
    }, [status]);

 
  const { value: enteredgenres, valueChangeHandler: genresChangeHandler } =
    useInput(() => {});

  const { value: enteredTitle, valueChangeHandler: TitleChangeHandler } =
    useInput(() => {});

  const { value: enteredBookid, valueChangeHandler: BookidChangeHandler } =
    useInput(() => {});

  const { value: enteredAuthor, valueChangeHandler: AuthorChangeHandler } =
    useInput(() => {});

    const { value: enteredDescription, valueChangeHandler: DescriptionChangeHandler } =
    useInput(() => {});

  const { value: enteredPages, valueChangeHandler: PagesChangeHandler } =
    useInput(() => {});

  const { value: enteredPublish, valueChangeHandler: PublishChangeHandler } =
    useInput(() => {});
    
  let formIsValid = true;

 

  
  const formClassName = formIsValid
    ? "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
    : "cursor-not-allowed bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";

  const imgUploadHandler = (img) => {
    setBookImage(img);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(enteredBookid,enteredgenres,enteredDescription,enteredPages)
    const bookData = {
      
      genres: enteredgenres,
      title : enteredTitle,
      bookId : enteredBookid,
      author : enteredAuthor,
      description : enteredDescription,
      pages : enteredPages,
      publish : enteredPublish, 
      link : bookImage
      
    };
    
    console.log(bookData.bookid)
    sendRequest(bookData);
   
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full mt-20">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full  lg:w-12/12 px-4 py-10">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
              
              <div className="px-6 mb-8">
                    <img
                      alt="..."
                      src={bookImage}
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                  </div>
                 

                <form onSubmit={submitHandler}>
                  <UploadButton imgUpload={imgUploadHandler} />
                  <br></br>
                <div className="relative w-full mb-3 mt-10">
                  <input
                     id="genres"
                     value ={enteredgenres}
                     type="text"
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     onChange ={genresChangeHandler}
                     placeholder="genres"
                    />
                </div>
                <br>
                </br>
                  <div className="textarea w-full mb-3">
                    <input
                      id="Title"
                      value ={enteredTitle}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange = {TitleChangeHandler}
                      placeholder="Title"
                    />
                  </div>
                  <br>
                  </br>
                  
                  <div className="relative w-full mb-3">
                    <input
                      id="Bookid"
                      value={enteredBookid}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={BookidChangeHandler}
                      placeholder="isbn"
                    />
                  </div>
                  <br>
                  </br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Author"
                      value={enteredAuthor}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={AuthorChangeHandler}
                      placeholder="Author"
                    />
                  </div>
                  <br>
                  </br>
                  
                  <div className="relative w-full mb-3">
                    <textarea
                      id="Description"
                      value={enteredDescription}
                      type="text"
                      className="border-0 px-3 py-10 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 row-5"
                      onChange={DescriptionChangeHandler}
                      placeholder="Description"
                    >
                    </textarea>

                  </div>

                  <br>
                  </br>

                  <div className="relative w-full mb-3">

                    <input
                      id="Pages"
                      value={enteredPages}
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={PagesChangeHandler}
                      placeholder="Pages"
                    />
                  </div>
                  <br>
                  </br>

                  <div className="relative w-full mb-3">

                    <input
                      id="Publish"
                      value={enteredPublish}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange= {PublishChangeHandler}
                      placeholder="Publish"
                    />
                  </div>
                  <br>
                  </br>


                  <div className="text-center ">
                    <button
                      id="show-info"
                      className={formClassName}
                      type="submit"
                      disabled={!formIsValid}
                    >
                      Submit
                    </button>
                  

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
