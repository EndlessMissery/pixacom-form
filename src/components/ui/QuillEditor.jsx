import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillEditor.css';



const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'blockquote', 'code-block',
  'list', 'bullet',
  'link', 'image'
];

const QuillEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      className='quill'
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder="Text příspěvku"
      modules={modules}
      formats={formats}
      style={{ height: '200px', marginBottom: '60px' }}
    />
  );
};

export default QuillEditor;
