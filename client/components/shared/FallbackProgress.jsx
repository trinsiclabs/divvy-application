import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const FallbackProgress = () => {
  return (
    <CircularProgress
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-20px',
        marginLeft: '-20px',
      }}
    />
  );
};

export default FallbackProgress;
