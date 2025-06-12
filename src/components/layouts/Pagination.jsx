import './Pagination.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  export default Pagination;
  