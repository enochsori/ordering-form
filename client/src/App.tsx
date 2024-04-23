import { useEffect, useState } from 'react';
import { errorMessages, initialState } from './settings';
import { Disabled, ErrorMessage, InitialState, SubStatus } from './types/type';
import ProductImg from './components/ProductImg';
import ErrorMsg from './components/ErrorMsg';
import Form from './components/form/Form';
import ConfirmationsMsg from './components/ConfirmationsMsg';

function App() {
  const [formData, setFormData] = useState<InitialState>(initialState);
  const [disabled, setDisabled] = useState<Disabled>(true);
  const [subStatus, setSubStatus] = useState<SubStatus>('idle');
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    console.log(formData);
    if (formData.order !== 'tshirt') {
      Object.values(formData).includes('') || formData.order === 'undefined'
        ? setDisabled(true)
        : setDisabled(false);
    } else {
      Object.values(formData).includes('') || formData.order === 'undefined'
        ? setDisabled(true)
        : setDisabled(false);
    }
  }, [formData, disabled]);

  const handleClick = async (event) => {
    event.preventDefault();
    setSubStatus('pending');

    fetch('/order', {
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

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    setErrMessage('');
  };

  return (
    <div>
      {subStatus !== 'confirmed' ? (
        <>
          <ProductImg image={formData.order} />
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
