import { useState } from "react";


function EditableField({tag: Tag, value, label}){
    const [mainValue, setValue] = useState(value);
    const [saveValue, setSaveValue] = useState(mainValue);
    const [isEditing, setIsEditing] = useState(false);
    const [isHovering, setIsHovering] = useState(false);


    return <>{isEditing ? 
        <>
          <input type='text' value={mainValue} onChange={(e) => setValue(e.target.value)}></input>
          <button onClick={() => setIsEditing(false)}>save</button>
          <button onClick={() => {
            setIsEditing(false)
            setValue(saveValue)
            }}>cancel</button>
        </> 
        : 
        <Tag id={label} 
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
            >
            {mainValue} 
            {isHovering ? 
            <button id="edit-btn" onClick={() => {
                setIsEditing(true);
                setSaveValue(mainValue);
                setIsHovering(true);
                    }
                }
            ><img src="https://cdn.iconscout.com/icon/free/png-512/free-edit-icon-download-in-svg-png-gif-file-formats--pen-write-pencil-ball-study-user-interface-vol-2-pack-icons-2202989.png?f=webp&w=512" alt="icon" width="18" height="18"/>
            </button>: <></>
            }
        </Tag>
      }</>
}
export default EditableField;