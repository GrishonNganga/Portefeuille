import { useState, useEffect, RefObject } from 'react';

function useElementDimensions(ref: RefObject<HTMLElement>) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const getElementDimensions = () => {
            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };

        getElementDimensions();

        const handleResize = () => {
            getElementDimensions();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ref]);

    return dimensions;
}

export default useElementDimensions;
