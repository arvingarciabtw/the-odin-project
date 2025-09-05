function Field({ name, id = null, type, placeholder, onChange }) {
  return (
    <div className="field">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Field;
