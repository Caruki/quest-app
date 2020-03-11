import React from "react";

import Card from "../components/Card";
import RedirectButton from "../components/RedirectButton";

export default function Add() {
  return (
    <>
      <Card>{/*<SubmitButton></SubmitButton>*/}</Card>

      <RedirectButton name="Go to voting" destination="/vote"></RedirectButton>
      <RedirectButton
        name="See results of this poll"
        destination="/result"
      ></RedirectButton>
    </>
  );
}
