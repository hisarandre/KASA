import { useState } from "react";

function Dropdown({ title, content, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown__header">
        <h2>{title}</h2>
        <i className={isOpen ? " fa-solid fa-chevron-up dropdown__arrow--open" : "fa-solid fa-chevron-up dropdown__arrow"}></i>
      </button>

      <div className={isOpen ? "dropdown__content" : "dropdown__content--hidden"}>{content}</div>
    </article>
  );
}

export default Dropdown;
