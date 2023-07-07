import React, { useState } from 'react';

function App() {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [uniqueA, setUniqueA] = useState([]);
  const [uniqueB, setUniqueB] = useState([]);
  const [common, setCommon] = useState([]);
  const [combined, setCombined] = useState([]);

  const handleCompute = () => {
    const itemsA = listA.split('\n').map(item => item.trim());
    const itemsB = listB.split('\n').map(item => item.trim());

    const uniqueItemsA = itemsA.filter(item => !itemsB.includes(item));
    const uniqueItemsB = itemsB.filter(item => !itemsA.includes(item));
    const commonItems = itemsA.filter(item => itemsB.includes(item));
    const combinedItems = [...new Set([...itemsA, ...itemsB])];

    setUniqueA(uniqueItemsA);
    setUniqueB(uniqueItemsB);
    setCommon(commonItems);
    setCombined(combinedItems);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <textarea
          className="w-1/2 h-40 p-2 border border-gray-300 rounded"
          placeholder="List A"
          value={listA}
          onChange={e => setListA(e.target.value)}
        ></textarea>
        <textarea
          className="w-1/2 h-40 p-2 border border-gray-300 rounded"
          placeholder="List B"
          value={listB}
          onChange={e => setListB(e.target.value)}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCompute}
      >
        Compute
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Items present only in A:</h2>
        <ul className="list-disc list-inside">
          {uniqueA.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Items present only in B:</h2>
        <ul className="list-disc list-inside">
          {uniqueB.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Items present in both A and B:</h2>
        <ul className="list-disc list-inside">
          {common.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Items combining both A and B (unique):</h2>
        <ul className="list-disc list-inside">
          {combined.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
