import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Row, Col } from 'antd';
import * as s from './Tab.style';

// Components
import Layout from 'modules/shared/components/Layout';
// import Header from 'modules/shared/components/Header';
import Parts from 'modules/tab/components/Parts';
import TitleInput from 'modules/tab/components/TitleInput';
import AddPartButton from 'modules/tab/components/_buttons/AddPartButton';

// Functions
import { mapKeysToActions } from 'modules/tab/utils/mapKeysToActions';

const Tab = () => {
    const dispatch = useDispatch();
    const parts = useSelector(store => store.tab.parts, shallowEqual);
    const all_ids = parts.all_ids || [];
    const by_id = parts.by_id || {};

    function handleKeyDown(e) {
        const action = mapKeysToActions(e.key);
        dispatch(action);
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <Layout include_actions_bar include_keytips>
            <Row>
                <Col span={24}>
                    <TitleInput />
                    <s.PaddingWrapper>
                        {all_ids.map(part_id => (
                            <Parts
                                key={part_id}
                                part_id={part_id}
                                part={by_id[part_id]}
                            />
                        ))}
                    </s.PaddingWrapper>
                    <div><AddPartButton /></div>
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
                </Col>
            </Row>
        </Layout>
    );
};

export default Tab;
