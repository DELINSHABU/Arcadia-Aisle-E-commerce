// eslint-disable-next-line react/prop-types
function Title({ name }) {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center ">
                <h2 className="text-4xl font-serif uppercase py-5">{name}</h2>

            </div>

        </div>

    )
}

export default Title