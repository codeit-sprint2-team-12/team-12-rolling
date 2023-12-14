import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const StyledEditorContainer = styled.div`
  border-radius: 10px;
  border: 2 solid red;
  overflow: hidden; // Optional: Ensure content doesn't overflow the rounded corners
  width: 72rem; // Adjust width as needed
`;

const StyledReactQuill = styled(ReactQuill)`
  width: 72rem;

  .ql-editor {
    height: 40rem;
  }
  .ql-container {
    border-bottom-left-radius: 1.5em;
    border-bottom-right-radius: 1.5em;
  }
  .ql-toolbar {
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
  }

  @media (max-width: 767px) {
    width: 32rem;

    .ql-toolbar.ql-snow .ql-formats {
      margin-right: 0;
    }
  }
`;

function TextEdit() {
  // const [value, setValue] = useState('');
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

  return (
    <StyledEditorContainer>
      <StyledReactQuill className="ql-editor ql-toolbar" modules={modules} />
    </StyledEditorContainer>
  );
}

export default TextEdit;
