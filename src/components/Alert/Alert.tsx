import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: VoidFunction;
}

const Alert: React.FC<Props> = ({type, onDismiss, show, children}) => {
  const closeButtonStyles = {
    backgroundImage: 'url("https://img.freepik.com/premium-vector/red-x-symbol_1102-4135.jpg")',
    backgroundSize: 'contain',
    width: '25px',
    height: '25px',
    cursor: 'pointer'
  };

  return (
    <div className={`alert alert-${type} mt-5`} role="alert" style={{display: show ? 'block' : 'none'}}>
      {children}
      {onDismiss && (
        <div onClick={onDismiss} className="ms-auto" style={closeButtonStyles}/>
      )}
    </div>
  );
};

export default Alert;