import { useState } from 'react';
import UsersRollingPage from './UsersRollingPage';

export default function EditPage() {
  const [goDeletePage, setGoDeletePage] = useState(true);

  return <UsersRollingPage deletePage={goDeletePage} />;
}
