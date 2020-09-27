import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './NavigationBar.style';

// FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

// Components
import Container from '../Container';
import AccountMenu from '../AccountMenu';
import CreateTabButton from 'modules/tab/components/CreateTabButton';

// Utils
import isUserLogged from 'modules/user/utils/isUserLogged';

const NavigationBar = () => (
    <s.TabBarWrapper>
        <Container background="#253140">
            <s.Logo>
                {/* <FontAwesomeIcon icon={faSlidersH} /> */}
                Jamister
            </s.Logo>
            {isUserLogged() && (
                <s.Menu>
                    <li>
                        <Link to="/me/tabs">
                            Tablaturas
                        </Link>
                    </li>
                </s.Menu>
            )}
            <s.Button>
                <CreateTabButton />
            </s.Button>
            <AccountMenu />
        </Container>
    </s.TabBarWrapper>
);

export default NavigationBar;
