function Error({ message }) {
  console.log(message)
  return (
    <div className="flex justify-center items-center text-center">
      <p className="font-semibold p-10">Some Error happend, try again later</p>
    </div>
  );
}

export default Error;
