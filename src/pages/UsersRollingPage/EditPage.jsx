import { useState } from 'react';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import UsersRollingPage from './UsersRollingPage';

export default function EditPage() {
  const [goDeletePage, setGoDeletePage] = useState(true);

  return <UsersRollingPage deletePage={goDeletePage} />;
}
