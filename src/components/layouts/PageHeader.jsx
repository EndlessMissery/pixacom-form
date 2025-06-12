import './PageHeader.css';

const PageHeader = ({ title, buttonText, onButtonClick }) => (
    <div className="header-list">
      <h1>{title}</h1>
      <button className="button" onClick={onButtonClick}>
        <span>{buttonText}</span>
      </button>
    </div>
  );

  export default PageHeader;