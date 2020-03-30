import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  Card,
  CardTitle,
  CardBody,
  Row,
  Col,
} from "shards-react";
import isEmpty from "lodash/isEmpty";
import { FormattedMessage } from 'react-intl';

const Title = styled(CardTitle)`
  font-size: 1em;
`;

@connect((store) => {
  return {
    summary: store.dashboardReducers.summary
  };
}, {})
class Overview extends React.Component {
  render() {
    const {summary} = this.props;
    if(isEmpty(summary)) {
      return(<div/>);
    }

    return (
      <Row>
        <Col xs="6" md="3" className="mb-3">
          <Card className="p-0" theme="">
            <CardBody className="p-4 text-center">
              <Title className="text-danger">
                <FormattedMessage id="case.confirmed" defaultMessage="CONFIRMED" />
              </Title>
              <h2 className="text-danger mb-0">{summary.confirmed}</h2>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" md="3" className="mb-3">
          <Card className="p-0">
            <CardBody className="p-4 text-center text-primary">
              <Title className="text-primary">
                <FormattedMessage id="case.active" defaultMessage="ACTIVE" />
              </Title>
              <h2 className="text-primary mb-0">{summary.active}</h2>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" md="3" className="mb-3">
          <Card className="p-0">
            <CardBody className="p-4 text-center">
              <Title className="text-success">
                <FormattedMessage id="case.recovered" defaultMessage="RECOVERED" />
              </Title>
              <h2 className="text-success mb-0">{summary.recovered}</h2>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" md="3" className="mb-3">
          <Card className="p-0">
            <CardBody className="p-4 text-center">
              <Title>
                <FormattedMessage id="case.dead" defaultMessage="DEAD" />
              </Title>
              <h2 className="mb-0">{summary.dead}</h2>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Overview;
