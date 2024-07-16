const DeeperCounter = ({ count }: { count: number }) => {
    return (
        <p>this is from a deeper component that also has access to the {count}</p>
    )
}

export default DeeperCounter