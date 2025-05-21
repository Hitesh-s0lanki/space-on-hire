import {
    FormControl,
    FormField,
    FormItem,
} from "../ui/form";
import Select from 'react-select';
import { useState } from "react";

type Props = {
    form: any;
    name: string;
    options: { value: string; label: string }[];
};

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        display: 'flex',
        height: '2rem',
        width: '100%',
        borderRadius: '0.375rem', // rounded-md
        border: state.isFocused ? '2px solid #4f46e5' : '1px solid #d1d5db', // Focus ring and default border
        backgroundColor: '#ffffff', // bg-background
        padding: '0 0.75rem', // px-3 py-2
        fontSize: '0.875rem', // text-sm
        boxShadow: state.isFocused ? '0 0 0 2px #4f46e5' : 'none', // focus-visible:ring-2 focus-visible:ring-ring
        transition: 'border-color 0.2s, box-shadow 0.2s',
        '&:hover': {
            borderColor: '#a1a1aa', // Placeholder hover border color
        },
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#9ca3af', // placeholder:text-muted-foreground
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#1f2937', // Regular text color
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '0.375rem',
        borderColor: '#d1d5db',
        padding: '0',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#4f46e5' : state.isFocused ? '#f3f4f6' : '#ffffff', // Focus and selected colors
        color: state.isSelected ? '#ffffff' : '#1f2937', // Selected text color
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem', // text-sm
        '&:hover': {
            backgroundColor: '#e5e7eb', // hover background color
        },
    }),
    input: (provided: any) => ({
        ...provided,
        fontSize: '0.875rem', // text-sm
    }),
    menuList: (provided: any) => ({
        ...provided,
        padding: '0',
    }),
};


const TaskSingleSelectEditableField = ({ form, name, options }: Props) => {

    const [disabled, setDisabled] = useState(true)

    const findValue = (id: string) => {
        let value = ""

        options.forEach((e) => {
            if (e.value === id)
                value = e.label
        })

        return value
    }

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className=" col-span-3">
                    <FormControl className="p-1">
                        {disabled ? (
                            <div
                                onClick={() => setDisabled(false)}
                                className=" w-full flex items-center gap-2  rounded-md bg-background pl-2 pr-4 py-2 text-sm  text-muted-foreground hover:bg-gray-100 ">
                                {field.value ? (
                                    findValue(field.value)
                                ) : (
                                    <span className="text-muted-foreground">Empty</span>
                                )}
                            </div>
                        ) : (
                            <div className="w-full ">
                                <Select
                                    isClearable
                                    value={field.value}
                                    options={options}
                                    placeholder=""
                                    onChange={(e) => {
                                        if (e) {
                                            field.onChange(e?.value);
                                        }
                                        setDisabled(true)
                                    }}
                                    styles={customStyles}
                                    classNamePrefix="react-select"
                                    className="rounded-md border border-input bg-background text-sm h-8"
                                    onBlur={() => setDisabled(true)}
                                />
                            </div>
                        )}
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

export default TaskSingleSelectEditableField;