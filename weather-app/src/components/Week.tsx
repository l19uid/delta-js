import Day from './Day';

interface WeekProps {
    dayWeatherDetail: any;
}

function Week(props: WeekProps) {
    return <div>
        <Day dayWeatherDetail={props.dayWeatherDetail.data} day={1}/>
        <Day dayWeatherDetail={props.dayWeatherDetail.data} day={2}/>
        <Day dayWeatherDetail={props.dayWeatherDetail.data} day={3}/>
        <Day dayWeatherDetail={props.dayWeatherDetail.data} day={4}/>
        <Day dayWeatherDetail={props.dayWeatherDetail.data} day={5}/>
        <Day dayWeatherDetail={props.dayWeatherDetail.data} day={6}/>
        <Day dayWeatherDetail={props.dayWeatherDetail.data} day={7}/>
    </div>;
}
export default Week;