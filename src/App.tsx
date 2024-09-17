import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { counter1Selecttor } from "./store/slice/counter1Slice";
import { counter2Selecttor } from "./store/slice/counter2Slice";
import { useSelector } from "react-redux";

type Props = {};

export default function App({}: Props) {
  const counter1Reducer = useSelector(counter1Selecttor);
  const counter2Reducer = useSelector(counter2Selecttor);
  return (
    <div>
      <h1>APP</h1>
      <span>
        {counter1Reducer.loading && "Loading.."} {counter1Reducer.counter1}/
        {counter2Reducer.loading && "Loading.."} {counter2Reducer.counter2}
      </span>
      <Page1/>
      <hr />
      <Page2/>
    </div>
  );
}
