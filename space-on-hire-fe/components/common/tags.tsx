type Props = {
    text: string;
};

const Tags = ({
    text
}: Props) => {
    return (
        <div className="bg-[#CFF9C5] border-[#1B7C03] border-[1px] p-1 rounded-md text-xs">
            {text}
        </div>
    );
};

export default Tags;