

function Operation(props: any) {
    return <div>
        <select className="width-100 bg-neutral-800 text-center" value={props.operation} onChange={(e) => props.setOperation(parseInt(e.target.value))}>
            <option value="0" >+</option>
            <option value="1">-</option>
            <option value="2">*</option>
            <option value="3">/</option>
        </select>
    </div>;

}
export default Operation;