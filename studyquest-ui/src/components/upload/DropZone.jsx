import { useRef } from "react";
import { CloudUpload } from "lucide-react";

export default function DropZone({ onFile }) {
  const inputRef = useRef(null);
  const open = () => inputRef.current?.click();

  return (
    <div
      className="drop-zone"
      tabIndex={0}
      role="button"
      aria-label="Choose a PDF or DOCX file"
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onFile(e.dataTransfer.files[0]);
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx"
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          onFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
      <span className="upload-icon">
        <CloudUpload size={27} />
      </span>
      <h3>
        Drag and drop a file here or <u>browse files</u>
      </h3>
      <p>PDF or DOCX · maximum 10 MB</p>
    </div>
  );
}
