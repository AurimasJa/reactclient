import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="d-flex justify-content-center">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Prisijungimas</h3>
            <div className="form-group mt-3">
              <label>El. paštas</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Įveskite el. paštą"
              />
            </div>
            <div className="form-group mt-3">
              <label>Slaptažodis</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Įveskite slaptažodį"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-success">
                Patvirtinti
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">Pamiršai slaptažodį?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
