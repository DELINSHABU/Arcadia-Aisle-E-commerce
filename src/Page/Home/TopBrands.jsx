
function TopBrands() {
    const topBrands = [{ id: 1, image: "https://i.ibb.co/8mbVjNv/download-16.png" }, { id: 2, image: "https://i.ibb.co/WzVDrrp/download-12.jpg" }, { id: 3, image: "https://i.ibb.co/GnctxRR/download-11.jpg" }, { id: 4, image: "https://i.ibb.co/GFStfnZ/Adidas.jpg" }, { id: 5, image: "https://i.ibb.co/7vvQGQy/download-10.jpg" }, { id: 6, image: "https://i.ibb.co/7n6HD1D/25a66a451a9a26fcbe9c3b7cff9308fd.png" }, { id: 7, image: "https://i.ibb.co/QcWxnPB/lenovo-logo-design.png" }, { id: 8, image: "https://i.ibb.co/WgfRbFf/yamaha-racing-logo.jpg" },]
    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-center items-center py-5">
                <h2 className="text-2xl md:text-4xl font-serif uppercase py-5">Top Brands Products</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-center items-center gap-4 mx-2">
                {topBrands?.map(item => <div key={item?.id}>
                    <img className="w-32 h-36 rounded-lg object-fill " src={item?.image} alt="" />
                </div>)}
            </div>

        </div>
    )
}

export default TopBrands