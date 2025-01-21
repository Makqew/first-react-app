import { useState } from "react";

function EditableSection({ years, company, description }) {
    const [formData, setFormData] = useState({
      years: years || "",
      company: company || "",
      description: description || "",
    });
  
    const [isEditing, setIsEditing] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [savedData, setSavedData] = useState(formData);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    return (
        <>
      <div
        id="right-side"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              name="years"
              value={formData.years}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <button
              onClick={() => {
                setSavedData(formData); // Save the changes
                setIsEditing(false);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setFormData(savedData); // Revert to saved data
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <div className="workplace">
          {isHovering ? 
            <button id="edit-btn" onClick={() => {
                setIsEditing(true);
                setSaveValue(mainValue);
                setIsHovering(true);
                }
              }
            ><img src="https://cdn.iconscout.com/icon/free/png-512/free-edit-icon-download-in-svg-png-gif-file-formats--pen-write-pencil-ball-study-user-interface-vol-2-pack-icons-2202989.png?f=webp&w=512" alt="icon" width="18" height="18"/>
                  </button> : <></>}
            <code>{formData.years}</code>
            <h3>{formData.company}</h3>
            <p>Graphic Designer</p>
            <p className="description">{formData.description}</p>
          </div>
        )}
      </div>
      {/* showing btn */}
      </>
    );
  }
  
  export default EditableSection;