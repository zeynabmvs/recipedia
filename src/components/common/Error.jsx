function Error({ message }) {
  return (
    <div className="flex justify-center items-center text-center">
      <p className="font-semibold p-10">{message}</p>
    </div>
  );
}

export default Error;
