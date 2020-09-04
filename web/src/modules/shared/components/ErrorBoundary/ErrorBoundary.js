import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

// Components
import Layout from 'modules/shared/components/Layout';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    // componentDidCatch(error, errorInfo) {
    //     // You can also log the error to an error reporting service
    //     logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.error) {
            return (
                <Layout>
                    <Col span={24}>
                        <h1>Something went wrong.</h1>
                    </Col>
                </Layout>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default ErrorBoundary;
