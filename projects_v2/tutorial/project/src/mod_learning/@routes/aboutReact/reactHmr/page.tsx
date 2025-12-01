import {useState, useEffect} from "react";

export default function() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>
        React HMR refresh without loosing React states.
        <div>{counter}</div>
    </div>;
}