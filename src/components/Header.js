import React from 'react';
import shuffle from 'lodash.shuffle';

import FilmstripImage from './FilmstripImage';
import movieImages from '../constants/movieImages';
import pages from '../constants/pages';
import styles from './header.module.css';

const Header = () => (
    <header>
        <div className={styles.hero}>
            <div className={styles.filmStrip}>
                <div className={styles.filmStripTop}></div>
                <div className={styles.filmStripBody}>
                    <FilmstripImage
                        images={shuffle(movieImages)}
                        link={pages.movies}
                        overlayText='Movies & Episodic'
                    />
                    <FilmstripImage
                        images={shuffle(movieImages)}
                        link={pages.commercials}
                        overlayText='Commercials & Documentaries'
                    />
                    <FilmstripImage
                        images={shuffle(movieImages)}
                        link={pages.production}
                        overlayText='Production Management & Production Services'
                    />
                </div>
                <div className={styles.filmStripBottom}></div>
            </div>
        </div>
    </header>
);

export default Header;