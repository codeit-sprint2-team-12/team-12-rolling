import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const TextEditBox = styled.div`
  width: 72rem;
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
    <TextEditBox>
      <ReactQuill modules={modules} />
    </TextEditBox>
  );
}

export default TextEdit;
