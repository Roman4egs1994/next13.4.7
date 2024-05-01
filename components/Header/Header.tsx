import {LinkBlock} from './LinkBlock/LinkBlock';
import s from './Header.module.css'

export const Header = () => (
    <div className={s.navbar}>
        <LinkBlock title={'Characters'}/>
        <LinkBlock title={'Locations'}/>
        <LinkBlock title={'Episodes'}/>
    </div>
)
