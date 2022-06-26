import React from "react";
import { useController } from "react-hook-form";

const InputWidthHook = ({ lable, control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="input-wrapp">
      <label htmlFor={props.id || props.name}>{lable}</label>
      <input className="input-control" {...field} {...props} />
      {props.errors?.message && (
        <p className="err-massage">{props.errors?.message}</p>
      )}
    </div>
    // <Controller
    //   name={props.name}
    //   control={control}
    //   defaultValue=""
    //   render={({ field }) => {
    //     return (
    //       <div className="input-wrapp">
    //         <label htmlFor={props.id || props.name}>{lable}</label>
    //         <input className="input-control" {...field} {...props} />
    //         {props.errors?.message && (
    //           <p className="err-massage">{props.errors?.message}</p>
    //         )}
    //       </div>
    //     );
    //   }}
    // ></Controller>
  );
};

export default InputWidthHook;
