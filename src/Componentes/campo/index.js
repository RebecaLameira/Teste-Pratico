import "./campo.css";

const Campo = ({ label, placeholder }) => {
  return (
    <div className="campo">
      <label>{label}</label>
      <input placeholder={placeholder}></input>
    </div>
  );
};

export default Campo;
