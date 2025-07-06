export const scaleUpWhileInViewMotion = (delay: number) => {
    return {
        initial: {
            opacity: 0,
            scale: 0,
        },
        transition: {
            duration: 0.5,
            delay: delay
        },
        whileInView: {
            opacity: 1,
            scale: 1
        },
    };
};

