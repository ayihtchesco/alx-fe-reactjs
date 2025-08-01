// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Fill out both fields");
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          display: "block",
          marginBottom: "10px",
          width: "300px",
          height: "100px",
        }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
