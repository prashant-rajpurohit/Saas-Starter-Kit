import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Skeleton } from "../ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { CustomFieldProps } from "@/lib/types";

const CustomField = ({
  name,
  label,
  select,
  options,
  placeholder,
  isLoading,
  hidden,
  type,
  disabled,
  onBlur,
  onClick,
  onChangeFun,
  rules,
}: CustomFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <Field>
      {!hidden && !isLoading && <FieldLabel>{label}</FieldLabel>}
      {isLoading ? (
        <Skeleton className="h-8 w-full" />
      ) : (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field }) =>
            select ? (
              <Select
                value={field.value || ""}
                onValueChange={field.onChange}
                disabled={disabled || isLoading}
              >
                <SelectTrigger
                  className={`w-full border-border focus:ring-2 focus:ring-primary/20 focus:border-primary
    ${errorMessage ? "border-destructive focus:ring-destructive/20 focus:border-destructive" : ""}
  `}
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {(options || []).map((val: any, index: number) => {
                    const value = String(
                      val?._id ?? val?.id ?? val?.value ?? val?.name ?? val,
                    );
                    const label = String(
                      val?.name ?? val?.label ?? val?.value ?? val,
                    );
                    return (
                      <SelectItem
                        className="capitalize flex items-center gap-2"
                        value={value}
                        key={`${name}-${value}-${index}`}
                        disabled={Boolean(val?.disabled)}
                      >
                        {val?.icon && (
                          <span className="shrink-0 text-muted-foreground">
                            {val.icon}
                          </span>
                        )}
                        <span className="truncate">{label}</span>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            ) : (
              <Input
                {...field}
                value={field.value ?? ""}
                className={`w-full border-border focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary
    ${hidden ? "hidden" : "block"}
    ${errorMessage ? "border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive" : ""}
  `}
                disabled={disabled || false}
                placeholder={placeholder}
                type={type || "text"}
                onChange={(e) => {
                  const val =
                    type === "number" ? Number(e.target.value) : e.target.value;
                  field.onChange(val);
                  onChangeFun?.(e);
                }}
                onBlur={(e) => {
                  field.onBlur();
                  onBlur?.(e);
                }}
                onClick={onClick}
              />
            )
          }
        />
      )}
      <FieldError>{errorMessage}</FieldError>
    </Field>
  );
};
export default CustomField;
