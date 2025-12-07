import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    navigate(`order/${value}`);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
