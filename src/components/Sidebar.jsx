import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
           
            <img className={styles.cover}
             src="https://images.unsplash.com/photo-1679240339099-1759c6576e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
             />
       
       <div className={styles.profile}>
        <Avatar src= "https://github.com/silmarasozza.png"  />

       
        <strong>Silmara Sozza</strong>
        <span>Web Developer</span>
     
       </div>

       <footer>
        <a className={styles.perfil} href="#">
            <PencilLine size={20}/>
            Editar seu perfil
        </a>
       </footer>
       
        </aside>

    );
}