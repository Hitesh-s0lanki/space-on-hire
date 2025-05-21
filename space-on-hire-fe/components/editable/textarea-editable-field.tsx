import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type Props = {
    form: any;
    label: string;
    name: string;
    disabled: boolean
};

const TextareaEditableField = ({ form, label, name, disabled }: Props) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className=" col-span-2">
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Textarea
                            className={cn(" disabled:text-black disabled:cursor-default disabled:opacity-100 disabled:text-md disabled:font-semibold", !field.value && disabled && "bg-[#F8F8F8]")}
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

export default TextareaEditableField;
