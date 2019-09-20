import React from "react";
import User from "../../components/User";

const AuthIndexPage = props => (
  <div>
    <h2>My AuthIndexPage index page of {props.appName} rendered by next.js</h2>
    <User name="Navneet Gupta" age={28} />
  </div>
);

AuthIndexPage.getInitialProps = context => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "My Auth App" });
    }, 500);
  });
  return promise;
};

export default AuthIndexPage;
