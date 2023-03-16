

function History(props: any) {

    return <div>
        <h2 className="text-neutral-100 text-2xl p-2">
            History
        </h2>

        <div className="text-neutral-500 text-xl max-h-50 max-w-1">
            {props.history.map((item: any, index: number) => {
                switch (item.operation) {
                    case 0:item.operation = "+";break;
                    case 1:item.operation = "-";break;
                    case 2:item.operation = "*";break;
                    case 3:item.operation = "/";break;
                }
                return <div key={index}>
                    {item.numberA} {item.operation} {item.numberB} = {item.result}
                </div>
            })}
        </div>
    </div>;

}
export default History;