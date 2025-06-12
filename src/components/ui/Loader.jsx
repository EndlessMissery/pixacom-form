import './Loader.css';

export default function Loader() {
    return (
      <div className="loader-overlay">
        <svg
          className="spinner"
          width="80px"
          height="80px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Načítám"
        >
          <circle
            className="path"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    );
  }
  