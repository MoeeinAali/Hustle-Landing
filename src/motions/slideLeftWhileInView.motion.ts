export const slideLeftWhileInViewMotion = (delay: number) => {
    return {
        initial: {
            opacity: 0,
            x: 100
        },
        transition: {
            duration: 0.5,
            delay: delay
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
    };
};
