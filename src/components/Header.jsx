import styles from './Header.module.css'

import ignateLogo  from '../assets/ignate-Logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignateLogo} alt="Logotipo do Ignate" />
            
        </header>
            
    );
}