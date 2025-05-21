import {
    FormControl,
    FormField,
    FormItem,
} from "../ui/form";
import { useState } from "react";
import Select from 'react-select';
import StyleTag from "../common/tags";

type Props = {
    form: any;
    name: string;
    options: { value: string; label: string }[];
};

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        width: '100%',
        borderRadius: '0.375rem', // rounded-md
        border: state.isFocused ? '2px solid #4f46e5' : '1px solid #d1d5db', // Focus ring and default border
        backgroundColor: '#ffffff', // bg-background
        padding: '0 0.75rem', // px-3
        fontSize: '0.875rem', // text-sm
        boxShadow: state.isFocused ? '0 0 0 2px #4f46e5' : 'none', // focus-visible:ring-2 focus-visible:ring-ring
        transition: 'border-color 0.2s, box-shadow 0.2s',
        display: 'flex',
        alignItems: 'center', // Ensure text is vertically centered
        '&:hover': {
            borderColor: '#a1a1aa', // Placeholder hover border color
        },
    }),
    valueContainer: (provided: any) => ({
        ...provided,
        padding: '0px', // Reset padding to make sure height is consistent
        display: 'flex',
        alignItems: 'center',
    }),
    multiValue: (provided: any) => ({
        ...provided,
        backgroundColor: '#e5e7eb', // Background color for selected items
        borderRadius: '0.25rem', // rounded-md
        padding: '0 0.25rem',
        marginRight: '0.25rem',
    }),
    multiValueLabel: (provided: any) => ({
        ...provided,
        fontSize: '0.875rem', // text-sm
        color: '#1f2937', // Text color for selected items
    }),
    multiValueRemove: (provided: any) => ({
        ...provided,
        color: '#1f2937',
        '&:hover': {
            backgroundColor: '#4f46e5', // Hover background color
            color: '#ffffff', // Hover text color
        },
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#9ca3af', // placeholder:text-muted-foreground
        marginLeft: '0px', // Align placeholder properly
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
        margin: '0px', // Remove margin that might affect height
    }),
    indicatorsContainer: (provided: any) => ({
        ...provided,
        height: '2rem', // h-8 for consistency
    }),
    menuList: (provided: any) => ({
        ...provided,
        padding: '0',
    }),
};

const TaskMultiSelectEditableField = ({ form, name, options }: Props) => {

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
                    <FormControl>
                        {disabled ? <div
                            onClick={() => setDisabled(false)}
                            className=" col-span-3 flex items-center gap-1  rounded-md bg-background pl-2 pr-4 py-2 text-sm  text-muted-foreground hover:bg-gray-100 ">
                            {field.value && field.value.length !== 0 ? field.value.map((e: string, index: any) => (
                                <StyleTag key={index} text={findValue(e)} />
                            )) : <span className="text-muted-foreground">Empty</span>}

                        </div> : (
                            <div className="w-full">
                                <Select
                                    value={(field.value || []).map((e: string) => ({ label: findValue(e), value: e }))}
                                    options={options}
                                    placeholder=""
                                    onChange={(value: any) => {
                                        field.onChange(
                                            value.map((e: any) => e.value),
                                            {
                                                shouldValidate: true,
                                            }
                                        );
                                    }}
                                    isDisabled={disabled}
                                    styles={customStyles}
                                    isMulti
                                    className="rounded-md border border-input bg-background text-sm" // h-8 applied here too
                                    onBlur={() => {
                                        setDisabled(true)
                                    }}
                                />
                            </div>
                        )}
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

export default TaskMultiSelectEditableField;
