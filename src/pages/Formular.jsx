import React from "react";
import { useState } from "react";

const Formular = () => {
  const [state, setState] = useState({
    nom: "Jean",
    message: "Message",
    category: "web",
    categories: ["web", "mobile"],
    remember: true,
  });
  const handleChange = (evt, value) => {
    const name = evt.target.name;
    setState((state) => ({ ...state, [name]: value }));
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const [formData, setFormData] = useState({});
  const handleMultipleSelect = (evt) => {
    const value = Array.from(evt.target.selectedOptions).map((o) => o.value);
    handleChange(evt, value);
  };
  const handleInput = (evt) => {
    const value = evt.target.value;
    handleChange(evt, value);
  };
  const booleanHandle = (evt) => {
    const value = evt.target.checked;
    handleChange(evt, value);
  };
  const showData = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };
  return (
    <main>
      <form action="" onSubmit={showData}>
        <div className="mb-3">
          <label htmlFor="nom" className="pr-1">
            Votre nom
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            className="border brder-gray-100 px-1.5 py-2 outline-none"
            value={state.nom}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="pr-1">
            Votre message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="border brder-gray-100 px-1.5 py-2 outline-none"
            value={state.message}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category">Your category: {state.category}</label>
          <select
            name="category"
            id="category"
            value={state.category}
            onChange={handleInput}
            className="px-1 py-2"
          >
            <option value="mobile">Mobile</option>
            <option value="web">Web</option>
            <option value="desktop">DeskTop</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="categories">
            Your categories: {state.categories}
          </label>
          <select
            name="categories"
            id="categories"
            value={state.categories}
            onChange={handleMultipleSelect}
            className="px-1 py-2"
            multiple
          >
            <option value="mobile">Mobile</option>
            <option value="web">Web</option>
            <option value="desktop">DeskTop</option>
            <option value="ia">IA</option>
            <option value="design">Design</option>
          </select>
        </div>
        <div>
          <label htmlFor="remember">Se souvenir de moi</label>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={state.remember}
            onChange={booleanHandle}
          />
          {state.remember && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              blanditiis?
            </p>
          )}
        </div>
        <button type="submit">Valider</button>
      </form>
    </main>
  );
};

export default Formular;
