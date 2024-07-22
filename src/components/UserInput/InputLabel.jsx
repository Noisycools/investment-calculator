function InputLabel({ label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <input {...props} />
    </p>
  );
}

export default InputLabel;
