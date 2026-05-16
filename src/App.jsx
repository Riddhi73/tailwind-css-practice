function App() {
  return (
    <>
      <div className="flex bg-blue-500">
        <div className="flex-1 border border-yellow-500">First Div 1</div>
        <div className="flex-2 border border-pink-700">Second Div 2</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>First</div>
        <div>Second</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">First</div>
        <div>Second</div>
      </div>
    </>
  );
}

export default App;
