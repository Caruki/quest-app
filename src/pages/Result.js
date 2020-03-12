import React from "react";
import Card from "../components/Card";
import RedirectButton from "../components/RedirectButton";

export default function Result() {
  return (
    <>
      <Card>
        <RedirectButton
          name="Create your own poll"
          destination="/add"
        ></RedirectButton>
        <RedirectButton
          name="Go back to overview"
          destination="/"
        ></RedirectButton>
      </Card>
    </>
  );
}
