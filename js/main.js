document.documentElement.classList.add("js");
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.05});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Check whether the APK has been placed next to index.html
// APK served from Google Drive (fallback local: ./mutasim.apk)
