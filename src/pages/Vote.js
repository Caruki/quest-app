import React from "react";
import Card from "../components/Card";
import RedirectButton from "../components/RedirectButton";

export default function Vote() {
  return (
    <>
      <Card>{/*<SubmitButton></SubmitButton>*/}</Card>
      <RedirectButton
        name="See the results"
        destination="/result"
      ></RedirectButton>
    </>
  );
}
