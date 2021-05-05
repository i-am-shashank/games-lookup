import React from "react";
import { useSelector } from "react-redux";

export default function Description() {
  const obj = useSelector((state) => state.selected);
  console.log('obj', obj);
  return <div>desc page</div>;
}
