
import dynamic from 'next/dynamic'
const TweenOne = dynamic(() =>
  import('rc-tween-one'),{ ssr: false }
)
import ScrollAnim, { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';
import Texty from "rc-texty";
import "rc-texty/assets/index.css";


const ScrollOverPack = ScrollAnim.OverPack;
const ScrollParallax = ScrollAnim.Parallax;
 export default function LinkTileCatalog({light}){

    return(
        <>

        <div className={`LinkTileCatalogWrapp ${light}`}>
            <h2 className={'LinkTileCatalogH2'}>Хотите посмотреть полный каталог бассейнов <span className={'decor-bg-word'}><span className="decor-bg-word__ithem-bio4"></span>Biodesign?</span></h2>
            <div className={`container-2`}>
                        <a href={'/catalog'}>смотреть каталог</a>
            </div>

        </div>

        </>
    )
} 