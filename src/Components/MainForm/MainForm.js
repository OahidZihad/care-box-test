import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";
// import { postData, getData } from "../services/DataService";

const MainForm = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(info);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("Title", info.Title);
    formData.append("Author_Name", info.Author_Name);
    formData.append("Phone", info.Phone);
    formData.append("Email", info.Email);
    formData.append("Description", info.Description);
    console.log("formData", formData);

    fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((response) => {
        console.log(response, result);
      });
    });
  };

  return (
    <section className="mt-5 d-flex justify-content-center">
      <div
        style={{ boxShadow: "3px 3px 5px gray" }}
        className="card w-75 px-4 pt-5"
      >
        <h2 className="text-center">Care-Box Form</h2>
        <div className="card-body">
          <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group mb-3">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                {...register("Title", { required: true })}
                onBlur={handleBlur}
              />
              {errors.Title && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group mb-3">
              <input
                type="text"
                placeholder="Author_Name"
                className="form-control"
                {...register("Author_Name", { required: true })}
                onBlur={handleBlur}
              />
              {errors.Author_Name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group mb-3">
              <input
                type="text"
                placeholder="Phone"
                className="form-control"
                {...register("Phone", { required: true })}
                onBlur={handleBlur}
              />
              {errors.Phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                {...register("Email", { required: true })}
                onBlur={handleBlur}
              />
              {errors.Email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group">
              <textarea
                type="text"
                className="form-control mb-3"
                placeholder="Description"
                rows="3"
                {...register("Description", { required: true })}
                onBlur={handleBlur}
              ></textarea>
              {errors.Description && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="form-group text-center">
              <button type="submit" className="btn btn-dark">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainForm;
