import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill stylesheet

interface TextEditorProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({
  initialValue = "",
  onChange,
}) => {
  const [content, setContent] = useState<string>(initialValue);

  const handleChange = (value: string) => {
    setContent(value);
    onChange(value);
  };

  // Quill modules for toolbar and other configurations
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"], // remove formatting button
    ],
  };

  // Quill formats that are allowed in the editor
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
  ];

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default TextEditor;
