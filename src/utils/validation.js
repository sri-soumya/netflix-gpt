export const checkValidEmailAndPassword = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
  if (!emailRegex.test(email))
    return <p className="text-red-600 text-sm">Invalid Email Address</p>;
  if (!passwordRegex.test(password))
    return (
      <div className="text-red-600 text-sm">
        <p>Your password must satisfy the given conditions:</p>
        <ul className="list-disc">
          <li>Minimum of 8 characters</li>
          <li>Contains atleast 1 uppercase alphabet</li>
          <li>Contains atleast 1 lowercase alphabet</li>
          <li>Contains atleast 1 digit</li>
          <li>Contains atleast 1 special character</li>
        </ul>
      </div>
    );
  return null;
};
