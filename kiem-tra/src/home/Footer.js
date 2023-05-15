export function Footer() {
    return (
        <>
            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white">Hướng dẫn chuyến đi.</h5>
                            <p className="small text-small">
                                Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong những
                                điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn
                                là bốn Di sản Văn hóa Thế giới được UNESCO công nhận:
                            </p>
                            <button type="button" className="btn btn-danger">
                                Xem trên bản đồ
                            </button>
                            <h2 className=" text-white">Địa điểm</h2>
                            <ol className="text-white">
                                <li>Cố đô Huế</li>
                                <li>Phố cổ Hội An</li>
                                <li>Thánh địa Mỹ Sơn</li>
                                <li>Động Phong Nha</li>
                            </ol>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <ol className="list-unstyled text-muted">
                                <li>
                                    <a href="https://furamavietnam.com/vi/furama-resort-danang-rack-rate/">
                                        Giá công bố
                                    </a>
                                </li>
                                <li>
                                    <a href="https://furamavietnam.com/vi/work-with-us/">Tuyển dụng </a>
                                </li>
                                <li>
                                    <a href="https://furamavietnam.com/vi/contact/">Liên hệ</a>
                                </li>
                                <li>
                                    <a href="https://furamavietnam.com/vi/lifestyle-blog/">FAQ</a>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-6 col-md-6 float-end">
                            <h5 className="text-white mb-3">Liên hệ</h5>
                            <p className="small text-small">
                                103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
                                Danang City, Vietnam Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                                Email: reservation@furamavietnam.com * www.furamavietnam.com GDS
                                Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236, Sabre-GD 032771,
                                Worldspan- GD DADFU
                            </p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        aria-describedby="button-addon2"
                                    />
                                    <button
                                        className="btn btn-primary"
                                        id="button-addon2"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-cursor-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <p className="small text-small mb-0">© Furama Resort Da Nang </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}