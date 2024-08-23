import { UseFormRegister } from "react-hook-form";

export enum FormFieldType {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  DATE = "date",
  TIME = "time",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SELECT = "select",
  TEXTAREA = "textarea",
}

export interface CustomFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  fieldType: FormFieldType;
  name: string;
  required?: boolean;
  selectOptions?: string[] | number[];
  placeholder: string;
  label?: string;
}
