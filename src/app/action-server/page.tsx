"use client";

import { urlApi } from "../(actions)/urlApi";

export default function Component() {
  const submit = async () => {
    const res = await urlApi();
    console.log(res);
  };

  return <button onClick={() => submit()}>Click me</button>;
}