import React from "react";

export default function Login() {
  return (
    <div className="contentBody mt-4 ">
      <div class="login-page">
  <div class="form">
  
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
    </div>
  );
}
