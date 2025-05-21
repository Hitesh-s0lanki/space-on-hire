import Image from "next/image";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
    form: any;
    label: string;
    name: string;
    image: string;
    value?: string | null;
    href: string;
    disabled: boolean
};

const UrlInputEditableField = ({
    form,
    label,
    name,
    image,
    value,
    href,
    disabled,
}: Props) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className=" space-y-1">
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <div
                            className={cn(
                                "flex items-center border border-gray-300 rounded-md h-10 gap-1 w-full px-1 bg-background",
                                value === "Not Provided!" && "bg-[#F8F8F8]"
                            )}
                        >
                            <Image
                                src={image}
                                alt="Icon"
                                width={20}
                                height={20}
                            />
                            {!disabled && (
                                <input
                                    type="text"
                                    className="flex h-8 w-[280px] rounded-md border-none bg-background px-3 text-sm ring-offset-background placeholder:text-muted-foreground disabled:text-black disabled:cursor-default disabled:opacity-100 disabled:text-md disabled:font-semibold "
                                    placeholder="Enter text here"
                                    value={field.value}
                                    onChange={field.onChange}
                                    disabled={disabled}
                                />
                            )}
                            {disabled && (
                                <Link
                                    href={href || ""}
                                    className={cn(" text-muted-foreground text-md truncate")}
                                    target="_blank"
                                >
                                    {value !== "Not Provided!" ? value : ""}
                                </Link>
                            )}
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default UrlInputEditableField;
