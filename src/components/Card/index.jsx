import styles from './index.module.scss';
import DivImage from "../DivImage/index.jsx";
import DivDescription from "../DivDescription/index.jsx";
import PropTypes from "prop-types";


function Card({title, description, imageSrc}) {
    console.log(styles);
    return (
        <div className={styles.cardContainer}>
            <DivImage src={imageSrc}/>
            <DivDescription description={description} title={title}/>
        </div>
    );
}


Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default Card;
