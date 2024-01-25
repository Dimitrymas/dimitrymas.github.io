import PropTypes from "prop-types";
import styles from "./index.module.scss";

function DivImage ({src}) {
    return (
        <div className={styles.imageDiv}>
            <img src={src} alt="img" className={styles.image}/>
        </div>
    )
}


DivImage.propTypes = {
    src: PropTypes.string.isRequired,
}

export default DivImage