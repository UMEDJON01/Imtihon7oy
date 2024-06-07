function Error() {
  function handleClick() {
    window.history.back();
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="font-extrabold text-9xl text-red-600">Error</h1>
      <p className="pt-5 text-2xl text-gray-700">Page Not Found</p>
      <button
        onClick={handleClick}
        className="mt-5 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back
      </button>
    </div>
  );
}

export default Error;
