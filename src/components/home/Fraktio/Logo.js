import React from 'react';
import { css } from 'emotion';

const logo = css({
  verticalAlign: '-19%',
  position: 'relative',
  display: 'inline-block',

  path: {
    fill: 'hsl(0, 0%, 30%)'
  }
});

export default () => (
  <svg className={logo} height="20" viewBox="0 0 83 22" width="75" xmlns="http://www.w3.org/2000/svg">
    <path d="m30.3296324 7.70691966c0-1.26660638.2823409-2.21976744.8470229-2.85897017.5649463-.63945923 1.4619342-.9590606 2.6922853-.9590606 1.2300867 0 2.2970607.32293588 3.2006577.96855117.0124251.08515863.0187698.20981855.0187698.37423627s-.0441488.43528373-.1316533.81311102c-.0880334.3773143-.2069973.68178205-.3579493.91314676h-1.5814267c-.2257671-.41399407-.3452597-.80387696-.3576848-1.16939215-.1504232-.02411119-.2762606-.03642328-.3761903-.03642328-.4774418 0-.8163568.12799445-1.0172735.38372685-.2006525.2559889-.3008466.71846181-.3008466 1.38818828v.69409413h2.8805127v1.68060045h-2.8805127v5.16979571c.941401.182373 1.5814268.4198936 1.9200775.7123058l-.1879631 1.4061434h-5.2153773l-.1879631-1.4061434c.1758022-.2311082.5207976-.4383618 1.0355148-.6212475v-5.26085401h-.8282533l-.2072615-1.26045034c.2757319-.24342029.621256-.38321383 1.0355148-.42015011zm11.6500809 2.59360354c-.9538261 0-1.6131506.1767298-1.9766513.5299329v4.1832895c1.0164804.1823729 1.7130801.4381053 2.0897992.7669407l-.1884917 1.4064h-5.3843062l-.1882274-1.4064c.175538-.2308517.5205332-.4383618 1.0355148-.6212476v-5.0779681c-.4396377-.14620609-.7846331-.35269011-1.0355148-.6207346l.1882274-1.40716941c.6899906-.14569309 1.3112466-.21879613 1.8637679-.21879613.5522568 0 1.0101356.01231209 1.3744295.03642328v1.15092402c.2884214-.32883544.6587957-.59970145 1.1105941-.81311103.4520628-.21264007.8628849-.31934486 1.2332592-.31934486.3701099 0 .6241639.03026723.7624264.09105818l-.0563097 2.37495105c-.2511459-.0366797-.5271422-.0551479-.8285174-.0551479zm1.3254165-.89489406c0-.18262936.0063447-.37705779.0190342-.58456783 1.1669037-.60867901 2.422105-.91314676 3.7648109-.91314676 1.3429703 0 2.3065779.24649832 2.8900297.73975148.5837163.49299664.8755744 1.31252022.8755744 2.45677517v3.8908773c.4388446.0851586.78384.1890419 1.0352503.3103674v1.5892857c-.6400258.2918992-1.5563121.4383617-2.7485948.4383617-.1258374-.3162668-.2321118-.7002502-.3198808-1.1506674-.5400961.7677101-1.5187724 1.1506674-2.9370866 1.1506674-.8406782 0-1.5592201-.2370077-2.1553614-.7123057-.5964058-.4747851-.8946086-1.1201438-.8946086-1.9360764s.279433-1.4584698.8377702-1.9276118c.5586017-.4683724 1.3902915-.7030717 2.4948052-.7030717h2.0519952v-.8764669c0-.9503396-.5210619-1.4253811-1.5629214-1.4253811-.3891441 0-.7090248.03667977-.9596421.10978281-.0256433.51172129-.1007228.90750369-.2262958 1.18734729h-1.8447335c-.2136063-.4257931-.3201451-.9739377-.3201451-1.64392066zm3.3883563 6.06498746c.6402901 0 1.1486625-.1833989 1.5253816-.5486577v-1.4977145h-1.3183845c-.9035969 0-1.3551309.3349914-1.3551309 1.0042049 0 .3049807.097286.5550701.2921224.749242.1940433.1951981.4798211.2929253.8560114.2929253zm12.7439672 1.716367-3.3323111-4.7309211 2.0710295-2.61195875c-.213342-.12183841-.364294-.24957635-.4517986-.38347034l.1876987-1.40691292h4.1420587l.1884917 1.40691292c-.2762607.34089101-.7970582.60893549-1.5629213.80362049l-1.8071939 2.0094358 2.1273389 2.7217416c.7782884.1705739 1.3242005.4322058 1.6377364.7854088l-.1879629 1.4061435zm-6.9850316-12.96924901c.7032089-.15800518 1.3556598-.23700776 1.9581459-.23700776.602486 0 1.1108585.01769863 1.5248528.05463491v11.12423096c.4896026.1828857.834598.3901393 1.0357791.6212474l-.1882274 1.4061435h-4.3305504l-.1879629-1.4061435c.1752734-.2311081.5205332-.4383617 1.0352504-.6212474v-8.9139541c-.4393735-.14646258-.7843687-.35320311-1.0352504-.6212476zm13.7203723 1.53435332v2.30159154h2.6922853v1.53465085h-2.6922853v4.6213948c0 .3898829.0563096.6733174.1694575.8492777.1123548.1769863.3825349.2652229.8094833.2652229.4258907 0 .8850914-.091571 1.3744296-.2742005l.5649463 1.4251246c-.9665156.4750416-1.9547091.7117927-2.9653736.7117927-1.0104 0-1.6943102-.2093055-2.0519951-.6299686-.3579491-.4201502-.5366593-1.0319071-.5366593-1.8355276v-5.133116h-.847023l-.2069972-1.11450075c.200388-.2308517.6143825-.46221641 1.2425119-.69435064.1504232-.99779238.508108-1.67367488 1.0730544-2.027391zm5.4083633 1.0412951c-1.0476754 0-1.5716452-.4593949-1.5716452-1.37895421s.5239698-1.37921071 1.5716452-1.37921071c1.0476755 0 1.5721741.4596514 1.5721741 1.37921071s-.5244986 1.37895421-1.5721741 1.37895421zm-2.1365916 1.26019383c.7026801-.15774867 1.3553954-.23752075 1.9578814-.23752075.6027505 0 1.1111228.01872464 1.5253816.0551479v7.28824491c.4888094.1828859.8343336.3903959 1.0352503.6212476l-.1879629 1.4064h-4.3305504l-.187963-1.4064c.1755378-.2308517.5205332-.4383617 1.0352503-.6212476v-5.077968c-.4393733-.14620612-.7843686-.35294665-1.0352503-.62099114zm8.8960148 9.27963346c-1.4875775 0-2.5889189-.3829575-3.304024-1.1504111-.7156341-.7671972-1.0735832-1.9273553-1.0735832-3.4802178 0-1.5523495.3986612-2.73995326 1.1959837-3.56178535.7965294-.82208858 1.9417553-1.23300463 3.4356775-1.23300463 1.4936579 0 2.6008153.36525872 3.3230583 1.09628913.7214501.73026089 1.0823072 1.87195085 1.0823072 3.42481335 0 1.5523495-.4047417 2.7584214-1.2144892 3.6169333-.809219.8585119-1.9578815 1.2873831-3.4449303 1.2873831zm-1.6657589-4.7858126c0 1.9489016.6019572 2.9230958 1.806665 2.9230958.6149112 0 1.0698821-.2223873 1.3651769-.666905.2947661-.4447743.4425458-1.1719572.4425458-2.1833441 0-1.8993966-.6149113-2.84922317-1.8455268-2.84922317-.6019573 0-1.0479398.21007505-1.3366255.63022517-.2886857.4201501-.4322354 1.1357904-.4322354 2.1461513z" />
    <path d="m12.1704576 1.83949283c3.8310714-.0582432 7.5210722-.69735139 10.9868202-1.83374686l.0338987-.00574597-4.5768422 9.11884891-2.4670411.41188132-.763763 2.38222547 1.9961102-.333266-1.011745 2.0152671-1.610187.2697992-.3801866 1.186281 1.3749823-.2295775-3.6029073 7.1785405v-20.15685065zm-1.1497387 0 .0208607.00365652v20.15685065l-3.60290724-7.1785405 1.37498227.2295775-.38018664-1.186281-1.6101869-.2697992-1.01174497-2.0152671 1.99611024.333266-.76376315-2.38222547-2.46704101-.41188132-4.5768422-9.11884891.03389868.00574597c3.46574803 1.13639547 7.15574881 1.77550366 10.98682022 1.83374686z" />
  </svg>
);
