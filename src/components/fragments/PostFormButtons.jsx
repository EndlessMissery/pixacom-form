import './PostFormButtons.css';

const PostFormButtons = ({ isEdit, onClose }) => (
    <div className="post-form-btn" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
      <button type="button" className="button-close" onClick={onClose}>Zavřít</button>
      <button type="submit" className="button">{isEdit ? 'Uložit' : 'Vytvořit'}</button>
    </div>
  );
  
  export default PostFormButtons;
  