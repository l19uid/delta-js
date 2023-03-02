import Temperature from "./Temperature";


interface DayProps {
    day: any;
    dayWeatherDetail: any;
}

function Day(props: DayProps) {
    console.log(props.dayWeatherDetail);
    return <div>
        DAY
        {props.day}
        {props.dayWeatherDetail}
    </div>;
}
export default Day;