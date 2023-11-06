export const ForecastItem =({item})=>{
    return<div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
    <p>{item.date}</p>
    <p>{item.day.condition.text}</p>
    <img src={item.day.condition.icon} alt="icon" />
    </div>
}