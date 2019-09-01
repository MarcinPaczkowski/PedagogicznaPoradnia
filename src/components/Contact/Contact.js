import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const contact = () => {
    return (
        <ScrollableAnchor id={'contact'}>
            <div className="contact">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="columns">
                            <div className="column">
                                <h2 className="contact-title">Kontakt</h2>
                                <div className="contact-content">
                                    <p className="contact-content--name">
                                        Imię i nazwisko:{' '}
                                        <a href="javascript:void(0)">
                                            Małgorzata Paczkowska
                                        </a>
                                    </p>
                                    <p className="contact-content--mail">
                                        E-mail:
                                        <a href="mailto:biuro@pedagogicznaporadnia.pl">
                                            biuro@pedagogicznaporadnia.pl
                                        </a>
                                    </p>
                                    <p className="contact-content--phone">
                                        Telefon:{' '}
                                        <a href="tel:+48 515-286-790">
                                            +48 515-286-790
                                        </a>
                                    </p>
                                    <p className="contact-content--facebook">
                                        Facebook:{' '}
                                        <a href="https://www.facebook.com/pedagogicznaporadnia/">
                                            Odwiedź stronę
                                        </a>
                                    </p>
                                </div>
                                <div className="contact-madeBy">
                                    <p className="contact-madeBy--desc">
                                        Stronę wykonała firma True Solution
                                        Marcin Paczkowski
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    );
};

export default contact;
