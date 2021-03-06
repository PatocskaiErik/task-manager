import { Form } from "react-bootstrap";

const FormTextInput = ({
  label,
  dataObject,
  dataObjectKey,
  setter,
  required = true,
  type = "text",
  placeholder = label + "...",
  controlId = dataObjectKey
}) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={dataObject[dataObjectKey] || ""}
        required={required}
        onChange={(e) =>
          setter({ ...dataObject, [dataObjectKey]: e.target.value })
        }
      />
    </Form.Group>
  );
};

export default FormTextInput;
