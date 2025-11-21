import React, { useState } from 'react';

const EditableCell = ({ value: initialValue, onSave, className }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);

    const handleSave = () => {

        if (value !== initialValue) {
            onSave(value);
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
            e.target.blur()
        } else if (e.key === 'Escape') {
            setValue(initialValue);
            setIsEditing(false);
        }
    };

    if (isEditing) {
        return (
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                className={`w-full p-1 bg-slate-700 text-white rounded-md border border-indigo-700 focus:outline-none ${className}`}
                autoFocus
            />
        );
    }

    return (
        <span
            onClick={() => setIsEditing(true)}
            className={`cursor-pointer w-full inline-block ${className}`}
        >
            {initialValue}
        </span>
    );
};

export default EditableCell;