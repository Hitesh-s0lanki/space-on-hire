import React from 'react';
import Select, { MultiValue } from 'react-select';

interface Option {
    value: string;
    label: string;
}

interface MultiSelectComponentProps {
    options: Option[];
    onChange: (selectedOptions: MultiValue<Option>) => void;
    label?: string;
    disabled?: boolean;
}

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

const MultiSelect: React.FC<MultiSelectComponentProps> = ({
    options,
    onChange,
    label,
    disabled = false,
}) => {
    return (
        <div className="w-full">
            {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <Select
                options={options}
                placeholder=""
                onChange={onChange}
                isDisabled={disabled}
                styles={customStyles}
                isMulti
                className="rounded-md border border-input bg-background text-sm" // h-8 applied here too
            />
        </div>
    );
};

export default MultiSelect;