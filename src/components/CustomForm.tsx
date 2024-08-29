import { CustomFormProps, FormFieldType } from "../types/CustomFormTypes";

const CustomForm = (props: CustomFormProps) => {
  const { fieldType } = props;
  switch (fieldType) {
    case FormFieldType.TEXT:
      return (
        <div className="flex flex-col gap-y-3">
          {props.label && (
            <label className="text-xl font-semibold">{props.label}</label>
          )}
          <input
            className="border border-black p-3 placeholder:text-black"
            type={fieldType}
            required
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            {...props.register(props.name)}
          />
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <div className="flex flex-col gap-y-3">
          {props.label && (
            <label className="text-xl font-semibold">{props.label}</label>
          )}
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
        </div>
      );
    case FormFieldType.NUMBER:
      return (
        <div className="flex flex-col gap-y-3">
          {props.label && (
            <label className="text-xl font-semibold">{props.label}</label>
          )}
          <input
            required
            defaultValue={props.defaultValue}
            className="border border-black p-3 placeholder:text-black"
            type={fieldType}
            placeholder={props.placeholder}
            {...props.register(props.name, {
              setValueAs: (value) => (isNaN(value) ? 0 : Number(value)),
            })}
          />
        </div>
      );
    case FormFieldType.EMAIL:
      return (
        <div className="flex flex-col gap-y-3">
          {props.label && (
            <label className="text-xl font-semibold">{props.label}</label>
          )}
          <input
            defaultValue={props.defaultValue}
            className="border border-black p-3 placeholder:text-black"
            {...props.register(props.name)}
            type={fieldType}
            required
            placeholder={props.placeholder}
          />
        </div>
      );
    case FormFieldType.PASSWORD:
      return (
        <div className="flex flex-col gap-y-3">
          {props.label && (
            <label className="text-xl font-semibold">{props.label}</label>
          )}
          <input
            className="border border-black p-3 placeholder:text-black"
            {...props.register(props.name)}
            type={fieldType}
            required
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
          />
        </div>
      );
  }
};

export default CustomForm;
