
function NumberA(props: any) {

    return <div className=" p-3 ">
        <input type="number" className="text-center bg-neutral-800  rounded" value={props.numberA} onChange={(e) => props.setNumberA(parseInt(e.target.value))} />
    </div>;

}
export default NumberA;