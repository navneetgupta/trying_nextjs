import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  //hook availabkle in both functional vs class based components
  //it is an async method
  // execute either on server or client
  // On client when something is clicked navigated or somehting happenend on child within the APP etc.
  // on server when page is served/loaded, refreshed etc
  static async getInitialProps(context) {
    //async method
    console.log(context); // Server side lifecycle hook
    // we can await here to resolve any promises
    // await() and retunr the object as props
    // can be used to fetch data from another server/DB e tc
    return { appName: "My App1" };
  }

  // Or without async
  static getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "My App" });
      }, 2000);
    });
    // promise.then()
    return promise;
  }
  render() {
    return (
      <div>
        <h2>My First index page of {this.props.appName} rendered by next.js</h2>
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
