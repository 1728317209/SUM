import React from 'react';

export interface Props {
  name: string;
}

const Title = ({ name }: Props) => (
  <div style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold' }}>
    {name}
  </div>
);

export default Title;
