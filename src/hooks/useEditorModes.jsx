import { useState } from "react";

const useEditorModes = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  return {};
};
