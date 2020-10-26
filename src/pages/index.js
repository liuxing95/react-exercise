import { Link }from 'umi'
import styles from './index.css'

export default function() {
  return (
    <div className={styles.normal}>
      <h3>首页</h3>
      <ul className={styles.list}>
        <li><Link to="/react-spring">react-spring</Link></li>
      </ul>
    </div>
  );
}
