import React from "react";

function ExtensionCard ({item, onRemove, onToggle}) {
    // Destructuring props as input
    return (
        <div className="custom-box">
            <div className="box-content">
                <img src={item.logo} alt={item.name} />
               <div className="box-text">
                 <h3>{item.name}</h3>
                <p>{item.description}</p>
               </div>
            </div>
            <div className="box-buttons">
                <button className="remove-button" onClick={onRemove}>Remove</button>
                <button 
                onClick={onToggle}
                className={`toggle-button ${item.isActive ? "active": "inactive"}`}
                aria-label = "Toggle Active State"
                >
                    <span className="toggle-thumb" />
                </button>
            </div>
        </div>
    );
}
export default ExtensionCard;