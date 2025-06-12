import './CommentsTable.css';

const CommentsTable = ({ comments, onDelete }) => (
  <div className="comments">
    <h3>Komentáře:</h3>
    <table className="comment-table">
      <thead>
        <tr>
          <th>Jméno</th>
          <th>E-mail</th>
          <th>Text</th>
          <th>Akce</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment) => (
          <tr key={comment.id}>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
            <td className="action-cell">
              <button
                className="action-table-btn"
                onClick={() => onDelete(comment.id)}
                aria-label={`Smazat komentář od ${comment.name}`}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CommentsTable;
