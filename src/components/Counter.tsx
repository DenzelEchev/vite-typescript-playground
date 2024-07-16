import NestedCounter from "./NestedCounter";
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (

        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            <NestedCounter count={count}></NestedCounter>
        </button>


    )
}

export default Counter