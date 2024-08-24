import { X } from "lucide-react";
import { FieldValues } from "react-hook-form";

const FormErrors = ({ errors }: { errors: FieldValues }) => {
  if (errors) {
    return (
      <div className="mt-3 flex flex-col gap-y-3">
        {Object.values(errors).map((err, index) => (
          <div key={index} className="flex items-center gap-x-3">
            <X className="text-red-500" />
            <p>{err.message}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default FormErrors;
