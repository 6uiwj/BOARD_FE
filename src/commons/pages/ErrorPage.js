import React from 'react';

const ErrorPage = ({ children }) => {
  return <h1>{children}</h1>; //에러메시지 출력
};

export default React.memo(ErrorPage);
