
const Card = ({ icon, title, days, price, obs }) => {

    return (
        <div className="xs:w-96 bg-[#324355] w-96 flex flex-col items-center text-center px-8 py-4  transition-all ease-linear hover:scale-105 shadow-md">
            <figure>
                <img width={300} src={icon} alt="" />
            </figure>
            <h3 className="mt-3 mb-3 text-2xl">{title}</h3>
            <p>{days}</p>
            <span className="mt-3 text-3xl text-bold">{price}</span>
            <span className="italic text-xs mt-6">{obs}</span>
        </div>
    )
}

export default Card