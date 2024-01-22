import Card from "./card";
import { IconMobile, IconTranslate, IconVE, } from "./icons";
import Link from "next/link";

export function Landing({ data }) {
    // شركة Accept Education للخدمات
    // جامعة الزيتونة الدولية
    // اتحاد طلبة سوريا
    let CamponysList = [
        {
            title: 'شركة Accept Education',
            img: '/images/logo-accept.png',
        },
        {
            title: 'جامعة الزيتونة الدولية',
            img: '/images/logo-zaitun.png',
        },
        {
            title: 'اتحاد طلبة سوريا',
            img: '/images/logo-sar.png',
        }
    ]
function Camponys(){
    return (
        <div className="box grid mb-20 " style={{margin: '10px  auto',marginBottom: '50px',maxWidth: '700px'}}>
            {
                CamponysList.map((item, index) => {
                    return (
                        <div className="box col j aitem p-10" key={index}  data-wow-delay=".3s" >
                                <img src={item.img} alt="" style={{width: '150px',borderRadius: '50%' ,margin: '10px'}} /> 
                                <b> {item.title} </b>
                        </div>
                    )
                })
            }
        </div>
    )
}
    return (
        <>
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
                {data?.map(a => <Card data={a} key={a._id} />)}
            </div>
            <div className="w-full box ">
                <Link href={'/blog'} className="m-a btn" style={{ width: "150px" }} >المزيد</Link>
            </div>
            <br />
            
            <div className="row justify-content-center"> 
                    <div className="section-title text-center">
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">الشركاء</h2> 
                </div>
            </div>
            <Camponys />
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
