import styles from './index.module.scss';
import places from '../../types/cardInfos.js';
import Card from "../Card/index.jsx";

function CardPlace () {
    return (
        <div className={styles.container}>
            {
                places.map((place) => {
                    return (
                        <Card
                            title={place.title}
                            description={place.description}
                            imageSrc={place.imageSrc}
                            imageLeft={place.imageLeft}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardPlace;