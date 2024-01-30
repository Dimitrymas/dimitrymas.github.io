import styles from './index.module.scss';
import DivImage from "../DivImage/index.jsx";
import DivDescription from "../DivDescription/index.jsx";
import PropTypes from "prop-types";


function Card({title, description, imageSrc, imageLeft}) {
    console.log(styles);
    return (
        <div className={styles.cardContainer}>
            {
                imageLeft ?
                    <>
                        <DivImage src={imageSrc}/>
                        <DivDescription title={title} description={description}/>
                    </>
                    :
                    <>
                        <DivDescription title={title} description={description}/>
                        <DivImage src={imageSrc}/>
                    </>
            }
        </div>
    );
}


Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default Card;
