import DeeperCounter from "./DeeperCounter"

const NestedCounter = ({ count }: { count: number }) => {
    return (
        <span>
            the number: {count} is from nested counter
            <DeeperCounter count={count}></DeeperCounter>
        </span>
    )
}

export default NestedCounter