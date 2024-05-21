import logo from '@assets/images/spaceX.png'
import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoHolder}>
                <img src={logo} alt='space-x-logo'/>

            </div>
            <nav >
                <span>Menu1</span>
                <span>Menu2</span>
                <span>Menu3</span>
                <span>Menu4</span>
                <span>Menu5</span>
                <span>Menu6</span>
            </nav>
        </header>
    )
}

export default Header