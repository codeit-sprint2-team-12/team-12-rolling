import { useParams } from 'react-router-dom';

function CreateMessagePage() {
  const params = useParams();

  return (
    <div style={{ fontSize: '100px' }}>지금 아이디 : {params.createdId}</div>
  );
}

export default CreateMessagePage;
