import { useState } from 'react';

function UseFormEvents() {
  const [data, setData] = useState([]);

  const blurEvent = ({ value }, parentIndex, childIndex) => {
    const modifyData = [...data];

    if (typeof childIndex === 'number') modifyData[parentIndex].content[childIndex].statement = value;
    else modifyData[parentIndex].title = value;

    setData(modifyData);
    console.log('The state has been updated.');
  };

  return {
    data,
    setData,
    blurEvent,
  };
}

export default UseFormEvents;
