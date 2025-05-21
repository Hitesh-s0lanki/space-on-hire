import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import MultiCreateableSelect from "../common/multi-createable-select";


type Props = {
  form: any;
  label: string;
  name: string;
  value: string[];
  disabled: boolean
};

const TagsEditableField = ({ form, label, name, value, disabled }: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
          </FormLabel>
          <FormControl>
            {disabled ? <div
              className={cn(
                " min-h-10 p-1 flex flex-wrap bg-background gap-1 border-2  rounded-md",
                value.length === 0 && "bg-[#F8F8F8]"
              )}
            >
              {value.map((e) => (
                <Badge
                  key={e}
                  className=" rounded-sm p-1 bg-[#E0F0FF] text-black hover:bg-[#E0F0FF]"
                >
                  {e}
                </Badge>
              ))}
            </div> : (
              <MultiCreateableSelect
                disabled={disabled}
                options={[]}
                onChange={(value: any) => {
                  form.setValue(
                    name,
                    value.map((e: any) => e.value),
                    {
                      shouldValidate: true,
                    }
                  );
                }}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TagsEditableField;
