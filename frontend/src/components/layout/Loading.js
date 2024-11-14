import styles from './Loading.module.css'
import loading from '../../img/loading.svg'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loading} alt="laoding" />
        </div>
    )
}

export default Loading