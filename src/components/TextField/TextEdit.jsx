import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const StyledReactQuill = styled(ReactQuill)`
  width: 72rem;

  .ql-container {
    border-radius: 15px;
  }

  .ql-editor {
    height: 40rem;
  }

  .ql-toolbar {
    border-radius: 15px;
    background-color: aliceblue;
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
        [{ align: [] }, { list: 'bullet' }, { list: 'ordered' }],
        [{ color: [] }],
        [{ size: ['small', false, 'large', 'huge'] }],
      ],
    },
  };

  return (
    <StyledReactQuill className="ql-editor ql-toolbar" modules={modules} />
  );
}

export default TextEdit;
