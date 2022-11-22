const Field = ({
  type = "text",
  name = "",
  value = "",
  children,
  onChange,
  className = { container: "mb-3", input: "" },
}) => {
  return (
    <div className={className.container}>
      {children && <label htmlFor={name}>{children}</label>}

      <input
        className={className.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
    </div>
  );
};
export default Field;
