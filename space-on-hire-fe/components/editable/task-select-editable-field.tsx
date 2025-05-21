import {
    FormControl,
    FormField,
    FormItem,
} from "../ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"

type Props = {
    name: string;
    form: any;
    options: string[];
};

const TaskSelectEditableField = ({ form, name, options }: Props) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className=" col-span-3">
                    <Select onValueChange={(e) => {
                        field.onChange(e)
                    }} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="flex h-8 w-full items-center justify-between rounded-md bg-background p-0 text-sm  focus:ring-0 border-none focus:border-none focus:ring-offset-0 ">
                                <div className=" w-full flex items-center gap-2  rounded-md bg-background pl-2 pr-4 py-2 text-sm  text-muted-foreground hover:bg-gray-100 ">
                                    {field.value ? (
                                        field.value
                                    ) : (
                                        <span className="text-muted-foreground">Empty</span>
                                    )}
                                </div>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {options.map((e, index) => (
                                <SelectItem key={index} value={e}>{e}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    );
};

export default TaskSelectEditableField;