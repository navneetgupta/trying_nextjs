import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  static getInitialProps(context) {
    //async method
    console.log(context); // Server side lifecycle hook
    // can be used to fetch data from another server/DB e tc
    return {};
  }
  render() {
    return (
      <div>
        <h2>My First index page rendered by next.js</h2>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go to Auth</button>
      </div>
    );
  }
}

export default IndexPage;
