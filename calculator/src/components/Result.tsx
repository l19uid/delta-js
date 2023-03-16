

function Result(props: any) {

    return <div>
        Result is
        <div className="text-green-600 text-2xl font-bold">
            {props.result}
        </div>
    </div>;

}
export default Result;