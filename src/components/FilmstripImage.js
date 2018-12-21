import React, { Component } from 'react';
import { Link } from 'gatsby';
import CrossfadeImage from 'react-crossfade-image';

import styles from './filmStripImage.module.css';
class FilmstripImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0,
        }
        this.changeImage = this.changeImage.bind(this);
    }

    componentDidMount() {
        // set the next timeout between 5 and 15 seconds
        this.setTimeout = setTimeout(this.changeImage, Math.random() * (15000 - 5000) + 5000);
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout)
    }

    /**
     * changes the image based on the context of props.images
     * at a random interval between 5 and 15 seconds
     */
    changeImage() {
        this.setState(
            ({ imageIndex }) => {
                const nextImageIndex = (imageIndex < this.props.images.length - 1) ? imageIndex + 1 : 0;
                return { imageIndex: nextImageIndex }
            },
            () => {
                this.timeout = setTimeout(this.changeImage, Math.random() * (15000 - 5000) + 5000)
            }
        )
    }

    render() {
        const currentPhoto = this.props.images[this.state.imageIndex];
        return (
            <div className={styles.imageContainer}>
                <Link to={this.props.link}>
                    <div className={styles.imageContainerOverlay}></div>
                    <CrossfadeImage className={styles.image} src={currentPhoto.image} alt={currentPhoto.alt} duration={1000} />
                    <div className={styles.imageContainerDetails}>
                        <h3>{this.props.overlayText}</h3>
                    </div>
                </Link>
            </div>
        );
    }
}

export default FilmstripImage;
