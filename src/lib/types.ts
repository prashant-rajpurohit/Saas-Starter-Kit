import z from "zod";
import { addUserSchema } from "./schemas";
import { RegisterOptions } from "react-hook-form";

export interface RoutesI{
    name: string;
    path: string;
    icon: React.ComponentType;
}
export type AddUserFormValues = z.infer<typeof addUserSchema>;
export type CommonProps = {
  name: string;
  label: string;
  placeholder: string;
  isLoading: boolean;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  hidden?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChangeFun?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: RegisterOptions;
};

export type SelectFieldProps = CommonProps & {
  select: true;
  options: (
    | string
    | (Record<string, any> & { disabled?: boolean; icon?: React.ReactNode })
  )[];
};

export type InputFieldProps = CommonProps & {
  select?: false;
  options?: never;
};

export type CustomFieldProps = SelectFieldProps | InputFieldProps;