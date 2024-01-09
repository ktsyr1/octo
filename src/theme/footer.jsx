

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="widget-wrapper">
                        <div className="row box space">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <div className="logo mb-30">
                                        <a href="/">
                                            <img src="/images/logo2.png" alt="" style={{ borderRadius: '30px' }} />
                                        </a>
                                    </div>
                                    <p className="  mb-30 text-white">
                                        شركة تقوم في خدمة العملاء في تنفيذ التصميم الإعلاني والديكور وبرمجة التطبيقات ومواقع الويب.
                                    </p>
                                    <ul className="socials">
                                        <li>
                                            <a href="https://t.me/octo_tech">
                                                <i className="lni lni-telegram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/octopuss.tech">
                                                <i className="lni lni-facebook-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://sy.linkedin.com/company/octop-tech">
                                                <i className="lni lni-linkedin-original"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/octopu.tech/">
                                                <i className="lni lni-instagram-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@octo-tech">
                                                <i className="lni lni-youtube"></i>
                                            </a>
                                        </li>
                                        <div></div>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-6">
                                <div className="footer-widget">
                                    <h3>حول الشركة</h3>
                                    <ul className="links">
                                        <li><a href="/">الرئيسية</a></li>
                                        <li><a href="/#service">الخدمات</a></li>
                                        <li><a href="/blog">المدونة</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <h3>أخر التدوينات</h3>
                                    <ul className="links">
                                        <li><a href="/#">How it works</a></li>
                                        <li><a href="/#">Privacy policy</a></li>
                                        <li><a href="/#">Terms of service</a></li>
                                        <li><a href="/#">Refund policy</a></li>
                                    </ul>
                                </div>
                            </div>

                         
                        </div>
                    </div>
                </div>

                <a href="#" className="scroll-top btn-hover">
                    <i className="lni lni-chevron-up"></i>
                </a>
                {/* <!-- ======== JS here ======== --> */}
                <script src="assets/js/bootstrap.bundle.min.js"></script>
                <script src="assets/js/wow.min.js"></script>
                {/* <script src="assets/js/main.js"></script>  */}
            </footer>
        </>
    )
}