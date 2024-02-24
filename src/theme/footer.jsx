import Link from "next/link";
import Script from "next/script";


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
                                        <Link href="/">
                                            <img src="/icons/logo2.svg" alt="" />
                                        </Link>
                                    </div>
                                    <p className="  mb-30 text-white">
                                        شركة تقوم في خدمة العملاء في تنفيذ التصميم الإعلاني والديكور وبرمجة التطبيقات ومواقع الويب.
                                    </p>
                                    <ul className="socials">
                                        <li>
                                            <Link href="https://t.me/octo_tech">
                                                <i className="lni lni-telegram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/octopuss.tech">
                                                <i className="lni lni-facebook-filled"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://sy.linkedin.com/company/octop-tech">
                                                <i className="lni lni-linkedin-original"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/octopu.tech/">
                                                <i className="lni lni-instagram-filled"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.youtube.com/@octo-tech">
                                                <i className="lni lni-youtube"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://x.com/octopu_tech">
                                                <i className="lni lni-twitter"></i>
                                            </Link>
                                        </li>
                                        <div></div>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-6">
                                <div className="footer-widget">
                                    <h3>حول الشركة</h3>
                                    <ul className="links">
                                        <li><Link href="/">الرئيسية</Link></li>
                                        <li><Link href="/#service">الخدمات</Link></li>
                                        <li><Link href="/blog">المدونة</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <h3>أخر التدوينات</h3>
                                    <ul className="links">
                                        <li><Link href="/#">How it works</Link></li>
                                        <li><Link href="/#">Privacy policy</Link></li>
                                        <li><Link href="/#">Terms of service</Link></li>
                                        <li><Link href="/#">Refund policy</Link></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <Link href="#" className="scroll-top btn-hover">
                    <i className="lni lni-chevron-up"></i>
                </Link>
                {/* <!-- ======== JS here ======== --> */}
                <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
                <Script src="/assets/js/wow.min.js"></Script>
            </footer>
        </>
    )
}
