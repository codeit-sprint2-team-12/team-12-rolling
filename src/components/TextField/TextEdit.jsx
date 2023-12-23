import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const EditorContainerStyle = styled.div`
  border-radius: 10px;
  border: 2 solid red;
  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 767px) {
    width: 72rem;
  }
`;

const ReactQuillStyle = styled(ReactQuill)`
  width: 72rem;

  .ql-editor {
    height: 26rem;
  }
  .ql-container {
    border-bottom-left-radius: 1.5em;
    border-bottom-right-radius: 1.5em;
  }
  .ql-toolbar {
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
  }

  @media (min-width: 375px) {
    width: 100%;

    .ql-toolbar.ql-snow .ql-formats {
      margin-right: 0;
    }
  }
`;

function TextEdit({ onChange }) {
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],
        [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
        [{ list: 'bullet' }, { list: 'ordered' }],
        [{ color: [] }],
        [{ size: ['small', false, 'large'] }],
      ],
    },
  };

  const handleChange = (e) => {
    const slicedText = e.slice(3, -4);
    onChange('content', slicedText);
  };

  return (
    <EditorContainerStyle>
      <ReactQuillStyle
        className="ql-editor ql-toolbar"
        modules={modules}
        style={{ padding: '0' }}
        onChange={handleChange}
      />
    </EditorContainerStyle>
  );
}

export default TextEdit;
