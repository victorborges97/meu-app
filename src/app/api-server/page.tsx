"use client";

export default function Component() {
  const submit = async () => {
    const res = await fetch("/api/urlApi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return <button onClick={() => submit()}>Click me</button>;
}