import './PostTable.css';

const PostTable = ({ posts, onEdit, onDelete, stripHtml }) => (
  <table className="post-table">
    <thead className="table-header">
      <tr>
        <th>ID</th>
        <th>Nadpis příspěvku</th>
        <th>Text příspěvku</th>
        <th>Detail</th>
        <th>Smazat</th>
      </tr>
    </thead>
    <tbody>
      {posts.map(post => (
        <tr key={post.id}>
          <td className="id-cell">{post.id}</td>
          <td className="title-cell" title={post.title}>{post.title}</td>
          <td className="excerpt-cell" title={stripHtml(post.body)}>
            {stripHtml(post.body).slice(0, 60)}...
          </td>
          <td className="action-cell">
            <button className="action-table-btn" onClick={() => onEdit(post)}>✏️</button>
          </td>
          <td className="action-cell">
            <button className="action-table-btn" onClick={() => onDelete(post.id)}>🗑️</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PostTable;
