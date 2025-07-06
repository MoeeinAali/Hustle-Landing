export const slideLeftMotion = (delay: number) => {
    return {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};