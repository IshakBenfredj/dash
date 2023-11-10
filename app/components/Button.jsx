import { MdAdd } from "react-icons/md";

export default function Button({ loading, title }) {
  return (
    <button className={loading ? "loading-btn" : "main-btn"}>
      {!loading ? (
        <>
          <MdAdd size={24} />
          <span>{title}</span>
        </>
      ) : (
        <>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
        </>
      )}
    </button>
  );
}
