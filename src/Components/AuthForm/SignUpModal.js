import React, { useContext, useRef, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const { closeOpen, toggleButton } = useContext(ModalContext);
  const { signUp } = useContext(AuthContext);
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const formRef = useRef();
  const navigate = useNavigate();

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 characters min");
      return;
    } else if (
      inputs.current[1].value.length !== inputs.current[2].value.length
    ) {
      setValidation("Passwords do not match");
      return;
    }

    try {
      console.log("Checking");
      const sign = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      toggleButton("close");
      navigate("/private/private-home");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setValidation("Email format is invalid");
      }
      if (error.code === "auth/email-already-in-use") {
        setValidation("Email already in use");
      }
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleButton("close");
  };
  return (
    <>
      {closeOpen.signUp && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={closeModal}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog bg-white px-3 py-2">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <form
                    className="sign-up-form"
                    onSubmit={handlerSubmit}
                    ref={formRef}
                  >
                    <div className="mb-3">
                      <label htmlFor="emal" className="form-label">
                        Email{" "}
                      </label>
                      <input
                        ref={addInputs}
                        type="email"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="emal" className="form-label">
                        Password{" "}
                      </label>
                      <input
                        ref={addInputs}
                        type="password"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="emal"> Repeat Password </label>
                      <input
                        ref={addInputs}
                        type="password"
                        className="form-control"
                        required
                      />
                      {validation !== "" && (
                        <p className="text-danger mt-1">{validation}</p>
                      )}
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
