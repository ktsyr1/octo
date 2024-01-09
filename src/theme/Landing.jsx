import { NavHeader } from "@/theme/nav";
import { IconCode, IconDigitalMarketing, IconMobile, IconTranslate, IconVE, Icondesign } from "./icons";
import Link from "next/link";

export function Landing({ data }) {
    return (
        <>
            {/* <!-- ======== hero-section start ======== --> */}
            <section id="home" className="hero-section">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1 className="wow fadeInUp" data-wow-delay=".4s"> أبداع بلا حدود </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    برمجة وتصميم منتجات رقمية من الفكرة حتى ما بعد الوصول للمستخدم
                                </p>
                                <a
                                    href="#"
                                    className="main-btn border-btn btn-hover wow fadeInUp"
                                    data-wow-delay=".6s"
                                >تواصل معنا</a
                                >
                                <a href="#service" className="scroll-bottom">
                                    <i className="lni lni-arrow-down"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                                <img src="/images/hero.jpeg" alt="" style={{ maxWidth: '500px', borderRadius: '40px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Service />
            <div className="row justify-content-center">
                <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                    <div className="section-title text-center mb-60">
                        <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                            احدث المقالات
                        </h2>
                        {/* <p className="wow fadeInUp" data-wow-delay=".4s">
                                مجموعة خدمات تنطلق بمشروعك من البداية حتى مراحل نجاح واستمرار المشروع
                            </p> */}
                    </div>
                </div>
            </div>
            <div className="box grid aitem j">
                {data.map(a => <Card data={a} key={a._id} />)}
            </div>

            {/* <!-- ======== hero-section end ======== --> */}

            {/* <!-- ======== feature-section start ======== --> */}
            {/* <section id="features" className="feature-section pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <div className="single-feature">
                                <div className="icon">
                                    <IconCode size={60}/>
                                </div>
                                <div className="content">
                                    <h3>Bootstrap 5</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor invidunt ut labore
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <div className="single-feature">
                                <div className="icon">
                                    <Icondesign size={60} />
                                </div>
                                <div className="content">
                                    <h3>Clean Design</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor invidunt ut labore
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <div className="single-feature">
                                <div className="icon">
                                    <IconDigitalMarketing size={60} /> 
                                </div>
                                <div className="content">
                                    <h3>Easy to Use</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor invidunt ut labore
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- ======== feature-section end ======== --> */}

            {/* <!-- ======== about-section start ======== --> */}
            {/* <section id="about" className="about-section pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-img">
                                <img src="assets/img/about/about-1.png" alt="" className="w-100" />

                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-30">
                                    <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                                        Perfect Solution Thriving Online Business
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        dinonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <a
                                    href="javascript:void(0)"
                                    className="main-btn btn-hover border-btn wow fadeInUp"
                                    data-wow-delay=".6s"
                                >Discover More</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- ======== about-section end ======== -->

    <!-- ======== about2-section start ======== --> */}
            {/* <section id="about" className="about-section pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-30">
                                    <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                                        Easy to Use with Tons of Awesome Features
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua.
                                    </p>
                                </div>
                                <ul>
                                    <li>Quick Access</li>
                                    <li>Easily to Manage</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="main-btn btn-hover border-btn wow fadeInUp"
                                    data-wow-delay=".6s"
                                >Learn More</a
                                >
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 order-first order-lg-last">
                            <div className="about-img-2">
                                <img src="assets/img/about/about-2.png" alt="" className="w-100" />

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- ======== about2-section end ======== -->

    <!-- ======== feature-section start ======== --> */}

            {/* <!-- ======== feature-section end ======== -->

    <!-- ======== subscribe-section start ======== --> */}
            {/* <section id="contact" className="subscribe-section pt-120">
                <div className="container">
                    <div className="subscribe-wrapper img-bg">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="section-title mb-15">
                                    <h2 className="text-white mb-25">Subscribe Our Newsletter</h2>
                                    <p className="text-white pr-5">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <form action="#" className="subscribe-form">
                                    <input
                                        type="email"
                                        name="subs-email"
                                        id="subs-email"
                                        placeholder="Your Email"
                                    />
                                    <button type="submit" className="main-btn btn-hover">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
function Service() {
    return (
        <section id="service" className="feature-extended-section pt-100">
            {/* <div className="feature-extended-wrapper"> */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                        <div className="section-title text-center mb-60">
                            <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                                الخدمات
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">
                                مجموعة خدمات تنطلق بمشروعك من البداية حتى مراحل نجاح واستمرار المشروع
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-feature-extended">
                            <div className="icon j box">
                                <i className="lni lni-display"></i>
                            </div>
                            <div className="content box col  aitem">
                                <h3>برمجة الويب</h3>
                                <p>
                                    نساعدك في بناء مواقع ويب جميلة وحديثة تجذب انتباه الزوار وتلبي أهدافك التجارية. نستخدم أحدث التقنيات البرمجية لنقدم لك مواقع ويب سريعة الاستجابة وسهلة الاستخدام وآمنة.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-feature-extended">
                            <div className="icon j box">
                                <IconMobile size={60} />
                            </div>
                            <div className="content box col  aitem">
                                <h3>برمجة تطبيقات الموبايل</h3>
                                <p>
                                    تطبيقات الهاتف المحمول التي تثير الإعجاب: نساعدك في إنشاء تطبيقات جوال جذابة وعالية الأداء تعمل بسلاسة على أنظمة iOS و Android. نستخدم تقنيات حديثة مثل الواقع المعزز والذكاء الاصطناعي لإنشاء تجارب مستخدم فريدة.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-feature-extended">
                            <div className="icon j box">
                                <i className="lni lni-grid-alt"></i>
                            </div>
                            <div className="content box col  aitem">
                                <h3>التصميم</h3>
                                <p>
                                    تصميمات إبداعية وتجذب الانتباه: نبتكر تصاميم جذابة وحديثة لعلامتك التجارية ومواقعك وتطبيقاتك، بما يتماشى مع أهدافك وجمهورك المستهدف. نركز على تصميم واجهات سهلة الاستخدام وبديهية لضمان أفضل تجربة ممكنة للمستخدمين.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-feature-extended">
                            <div className="icon j box">
                                <IconVE size={60} />

                            </div>
                            <div className="content box col  aitem">
                                <h3>المونتاج</h3>
                                <p>
                                    فيديوهات احترافية تروي قصتك: نساعدك في إنتاج مقاطع فيديو عالية الجودة تسرد قصتك وتحقق أهدافك التسويقية. نستخدم أحدث التقنيات لنقدم لك مقاطع فيديو جذابة ومؤثرة.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-feature-extended">
                            <div className="icon j box">
                                <IconTranslate size={60} />
                            </div>
                            <div className="content box col  aitem">
                                <h3>الترجمة</h3>
                                <p>
                                    ترجمات دقيقة ومتخصصة: نوفر خدمات ترجمة دقيقة لمختلف أنواع المحتوى، بما في ذلك المستندات القانونية والمواقع الإلكترونية والمواد التسويقية، بأكثر من 100 لغة. نتعاون مع فريق من المترجمين المحترفين والمتخصصين في مختلف المجالات لضمان أعلى مستوى من الدقة والجودة.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-feature-extended">
                            <div className="icon j box">
                                <i className="lni lni-rocket"></i>
                            </div>
                            <div className="content box col  aitem">
                                <h3>التسويق</h3>
                                <p>
                                    حملات تسويقية فعالة: نساعدك في تصميم وتنفيذ حملات تسويقية رقمية ناجحة تصل إلى جمهورك المستهدف وتحقق أهدافك التسويقية. نستخدم أحدث التقنيات والأدوات لنقدم لك حملات فعالة وقابلة للقياس
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
function Card({ data }) {
    return (
        <Link href={`/blog/${data.url}`} style={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            margin: '10px'
        }}>
            <img src={data.image} alt={data.title} style={{ borderRadius: '20px' }} />
            <b className="p-10  ">{data.title}</b>
        </Link>
    )
}