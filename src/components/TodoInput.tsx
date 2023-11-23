"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TodoInput = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSubmit = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    router.refresh();
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
