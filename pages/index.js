import React from "react";
import Link from "next/link";

const IndexPage = () => (
  <div>
    <h2>My First index page rendered by next.js</h2>
    <p>
      Go to{" "}
      <Link href="/auth">
        <a>Auth</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
