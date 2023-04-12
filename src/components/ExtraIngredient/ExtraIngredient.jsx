import React from "react";
import './styles.css'

const ExtraIngredient = ({ingredient, onSelect, isChecked}) => {

  return (
    <div className="extraIngredient">
        <label className="container">
            {ingredient}
            <input type="checkbox" checked={isChecked} onChange={() => onSelect(ingredient)}/>
            <span className="checkmark"></span>
        </label>
    </div>
  );
};

export default ExtraIngredient;
