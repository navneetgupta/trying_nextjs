import React from "react";
import Link from "next/link";

const ErrroPage = () => (
  <div>
    <h2>Ooops, Sooooomething went wrong...</h2>
    <p>
      Try
      <Link href="/">
        <a>Going back</a>
      </Link>
    </p>
  </div>
);

export default ErrroPage;
