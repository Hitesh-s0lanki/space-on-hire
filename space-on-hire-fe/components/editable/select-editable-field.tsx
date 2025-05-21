import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import Link from "next/link";
import SingleSelect from "../common/single-select";
import Image from "next/image";

type Props = {
    form: any;
    label: string;
    name: string;
    href?: string;
    options: { value: string; label: string }[];
    value: string;
    disabled: boolean
};

const SelectEditableField = ({ form, label, name, options, href, value, disabled }: Props) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className=" space-y-1">
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl className="p-1">
                        {!disabled ? (
                            <SingleSelect
                                onChange={(e) => {
                                    field.onChange(e?.value);
                                }}
                                options={options}
                                disabled={disabled}
                            />
                        ) : (
                            <div className=" flex items-center gap-2 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                <Image
                                    src={"/icons/company.svg"}
                                    alt="company"
                                    width={20} height={20}
                                />
                                <Link
                                    href={href || ""}
                                >
                                    {value || "Not Provided!"}
                                </Link>
                            </div>
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default SelectEditableField;