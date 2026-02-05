
"use client";


import { createPost } from "@/lib/type/action";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" required />

      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />

      {state?.message && <p aria-live="polite">{state.message}</p>}

      <button disabled={pending}>
        {pending ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
