import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ImageDropzone({ label, name, multiple = false, value, onChange }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (multiple) {
        onChange(name, [...value, ...acceptedFiles].slice(0, 5)); // max 5
      } else {
        onChange(name, acceptedFiles[0]);
      }
    },
    [onChange, name, multiple, value]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple,
  });

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed rounded-lg cursor-pointer transition ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-center text-sm text-gray-500">
          {isDragActive ? "Drop the files here..." : "Drag & drop or click to upload"}
        </p>
      </div>

      {/* Preview */}
      {multiple ? (
        <div className="grid grid-cols-3 gap-2 mt-2">
          {value &&
            value.map((file, i) => (
              <img
                key={i}
                src={URL.createObjectURL(file)}
                alt="preview"
                className="h-20 w-full object-cover rounded-md"
              />
            ))}
        </div>
      ) : (
        value && (
          <img
            src={URL.createObjectURL(value)}
            alt="preview"
            className="h-24 mt-2 object-cover rounded-md"
          />
        )
      )}
    </div>
  );
}

export default ImageDropzone;
