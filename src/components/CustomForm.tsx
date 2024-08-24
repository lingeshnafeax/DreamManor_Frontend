import { CustomFormProps, FormFieldType } from "../types/CustomFormTypes";

const CustomForm = (props: CustomFormProps) => {
  const { fieldType } = props;
  switch (fieldType) {
    case FormFieldType.TEXT:
      return (
        <>
          <input
            className="border border-black p-3 placeholder:text-black"
            type={fieldType}
            required
            placeholder={props.placeholder}
            {...props.register(props.name)}
          />
        </>
      );
    case FormFieldType.SELECT:
      return (
        <>
          <select
            className="no-arrow border border-black p-3 placeholder:text-black"
            defaultValue={props.selectOptions?.[0]}
            required
            {...props.register(props.name)}
          >
            {props.selectOptions?.map((value) => {
              return (
                <option key={value} className="p-3 text-black" value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </>
      );
    case FormFieldType.NUMBER:
      return (
        <>
          <input
            required
            className="border border-black p-3 placeholder:text-black"
            type={fieldType}
            placeholder={props.placeholder}
            {...props.register(props.name, {
              setValueAs: (value) => (isNaN(value) ? 0 : Number(value)),
            })}
          />
        </>
      );
    case FormFieldType.EMAIL:
      return (
        <input
          className="border border-black p-3 placeholder:text-black"
          {...props.register(props.name)}
          type={fieldType}
          required
          placeholder={props.placeholder}
        />
      );
    case FormFieldType.PASSWORD:
      return (
        <input
          className="border border-black p-3 placeholder:text-black"
          {...props.register(props.name)}
          type={fieldType}
          required
          placeholder={props.placeholder}
        />
      );
  }
};

export default CustomForm;
