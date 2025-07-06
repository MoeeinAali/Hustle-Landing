export const slideUpWhileInViewMotion = (delay: number) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        transition: {
            duration: 0.5,
            delay: delay
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
    };
};

