import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type Props = {
    form: any;
    label: string;
    name: string;
    disabled: boolean;
};

const InputEditableField = ({ form, label, name, disabled }: Props) => {
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
                        <Input
                            className={cn(
                                " disabled:text-black disabled:cursor-default disabled:opacity-100 disabled:text-md disabled:font-semibold h-8",
                                !field.value && disabled && "bg-[#F8F8F8]"
                            )}
                            {...field}
                            disabled={disabled}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default InputEditableField;
