import { useEffect, useState, MouseEvent } from 'react';
import { errorMessages, initialState } from './settings';
import { Disabled, FormData, SubStatus } from './types/type';
import ErrorMsg from './components/ErrorMsg';
import Form from './components/form/Form';
import ConfirmationsMsg from './components/ConfirmationsMsg';

function App() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [disabled, setDisabled] = useState<Disabled>(true);
  const [subStatus, setSubStatus] = useState<SubStatus>('idle');
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    if (formData.order !== 'tshirt') {
      Object.values(formData).includes('') || formData.order === 'undefined'
        ? setDisabled(true)
        : setDisabled(false);
    } else {
      Object.values(formData).includes('') || formData.size === 'undefined'
        ? setDisabled(true)
        : setDisabled(false);
    }
  }, [formData, disabled]);

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubStatus('pending');

    fetch('http://localhost:8000/order', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { status, error } = json;
        if (status === 'success') {
          setSubStatus('confirmed');
        } else if (error) {
          setSubStatus('error');
          setErrMessage(errorMessages[error]);
        }
      });
  };

  const handleChange = (value: string | undefined, name: string) => {
    setFormData({ ...formData, [name]: value });
    setErrMessage('');
  };

  return (
    <div className='bg-gray-100 rounded-lg shadow-lx w-96 mt-20 py-4'>
      {subStatus !== 'confirmed' ? (
        <>
          <Form
            formData={formData}
            handleChange={handleChange}
            handleClick={handleClick}
            disabled={disabled}
            subStatus={subStatus}
          />
          {subStatus == 'error' && <ErrorMsg>{errMessage}</ErrorMsg>}
        </>
      ) : (
        <ConfirmationsMsg formData={formData} />
      )}
    </div>
  );
}

export default App;
