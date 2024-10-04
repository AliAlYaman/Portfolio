export const Cards = ({src, name}) => {
    return(<div className="flex flex-col justify-center items-center">
    <img src={src} alt="" width={70}/>
    <p className="text-lg font-bold">{name}</p>
    </div>);
}