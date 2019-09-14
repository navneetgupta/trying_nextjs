import React from "react";
import Link from "next/link";
import Router from "next/router";

const IndexPage = () => (
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

export default IndexPage;
