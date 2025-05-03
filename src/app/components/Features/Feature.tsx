import EcosystemIcon from "../icons/ecosystem.svg";

const Feature = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="text-center py-10 px-5 border border-white/30 rounded-xl sm:flex-1 relative">
            <div
                className="absolute inset-0 border-2 border-purple-400 rounded-xl"
                style={{
                    maskImage:
                        "radial-gradient(100px 100px at 0px 0px, black, transparent)",
                }}
            ></div>
            <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
            </div>
            <h1 className="mt-6 font-bold">{title}</h1>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    );
};

export default Feature;
