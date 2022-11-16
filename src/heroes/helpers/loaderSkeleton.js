import { useEffect, useState } from "react";

export const LoaderSkeleton = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        console.log('hola')

        setTimeout(() => {
            setLoading(false);
            console.log('chau')
        }, 5000);

    }, []);

    return { loading };
}
