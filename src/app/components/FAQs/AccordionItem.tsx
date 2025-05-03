import PlusIcon from "../icons/plus.svg";
import MinusIcon from "../icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({
    question,
    answer,
    isOpen,
    setIsOpen,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    setIsOpen: () => void;
    // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="py-7 border-b border-white/30">
            <div
                className="flex items-center cursor-pointer"
                onClick={setIsOpen}
                // onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex-1">{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                    // className={isOpen ? "mt-4" : "hidden"} after implimenting the animation this part will be removed
                    initial={{
                        opacity:0,
                        height:0,
                        marginTop: 0,
                    }}
                    animate={{
                        opacity:1,
                        height:"auto",
                        marginTop: '16px',
                    }}
                    exit={{
                        opacity:0,
                        height:0,
                        marginTop:0
                    }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
