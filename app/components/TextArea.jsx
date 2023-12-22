import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextArea({details, setDetails}) {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["link"],
    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  return (
    <ReactQuill
      theme="snow"
      className="bg-gray-200 mb-4 mt-3 w-full rounded-xl overflow-hidden"
      modules={module}
      defaultValue={details}
      placeholder="Service Details"
      id="details"
      onChange={(value) => setDetails(value)}
    />
  );
}
