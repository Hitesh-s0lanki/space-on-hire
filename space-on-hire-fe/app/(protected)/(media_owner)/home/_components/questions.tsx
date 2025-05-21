import Image from "next/image";

type Props = {};

const QuestionCard = ({ }: Props) => {
    const questions = [
        {
            question: "Get instant support with AI-powered responses",
        },
        {
            question: "Quick and personal help from AI-driven tools",
        },
        {
            question: "AI-enhanced answers to your queries",
        },
        {
            question: "Personalized customer service with AI technology",
        },

    ]

    return (
        <div className="grid grid-cols-2 w-full px-5 gap-2 grid-rows-2">
            {questions.map((e, index) => (
                <SingleCard
                    key={index}
                    question={e.question}
                />
            ))}
        </div>
    );
};

function SingleCard({
    question,
}: {
    question: string;
}) {
    return (
        <div className="rounded-full shadow-md border bg-card bg-white py-3 px-4 text-muted-foreground flex gap-4 text-sm items-center">
            <Image
                src="/icons/question.svg"
                width={30}
                height={30}
                className=" text-white"
                alt="Setting Logo"
            />
            <p className=" text-sm text-muted-foreground">
                {question}
            </p>
        </div>
    );
}


export default QuestionCard;