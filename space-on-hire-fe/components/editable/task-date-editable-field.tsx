import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

type Props = {
    form: any;
    name: string;
};

const TaskDateEditableField = ({ form, name }: Props) => {
    return (
        <FormField
            name={name}
            control={form.control}
            render={({ field }) => (
                <FormItem className=" col-span-3 flex flex-col gap-2">
                    <Popover>
                        <PopoverTrigger>
                            <FormControl>
                                <div className=" flex items-center gap-2  rounded-md bg-background pl-2 pr-4 py-2 text-sm  text-black hover:bg-gray-100 ">
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span className="text-muted-foreground">Empty</span>
                                    )}
                                </div>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(e) => {
                                    field.onChange(e);
                                }}
                                disabled={(date) =>
                                    date < new Date()
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default TaskDateEditableField;
