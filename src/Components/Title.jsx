import React from 'react';

const Title = ({ data }) => {
  return <div className='page-title'>{data || "Seu texto Aqui"}</div>;
};

export default Title;