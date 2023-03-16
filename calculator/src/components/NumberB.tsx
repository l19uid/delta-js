

function NumberB(props: any) {

    return <div className="p-3">
        <input type="number" className="text-center bg-neutral-800 rounded" value={props.numberB} onChange={(e) => props.setNumberB(parseInt(e.target.value))} />
    </div>;

}
export default NumberB;