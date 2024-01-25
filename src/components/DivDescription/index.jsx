import styles from "./index.module.scss";
import PropTypes from "prop-types";

function DivDescription({title, description}) {
    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.descriptionDiv}>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    )
}

DivDescription.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default DivDescription