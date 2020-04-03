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

const CardContainer = styled(Card)`
`;
const Title = styled(CardTitle)`
  font-size: 1em;
`;
const NewCase = styled.span`
  font-size: 1em;
`;

@connect((store) => {
  return {
    summary: store.dashboardReducers.summary
  };
}, {})
class Overview extends React.Component {
  renderNewCase(new_case) {
    if(new_case && new_case > 0) {
      return (<NewCase>({new_case} <FormattedMessage id="case.new" defaultMessage="new" />)</NewCase>);
    }

    return null;
  }
  renderCase(total, new_case, className, key) {
    return(
      <Col xs="6" md="3" className="mb-3">
        <CardContainer className="p-0 h-100" theme="">
          <CardBody className={`${className} p-4 text-center`}>
            <Title className={className}>
              <FormattedMessage id={`case.${key}`} defaultMessage="Case" />
            </Title>
            <h2 className={`${className} mb-0`}>
              {total}
            </h2>
            {
              this.renderNewCase(new_case)
            }
          </CardBody>
        </CardContainer>
      </Col>
    );
  }
  render() {
    const {summary} = this.props;
    if(isEmpty(summary)) {
      return(<div/>);
    }

    return (
      <Row>
        {this.renderCase(summary.confirmed, summary.new_confirmed, "text-danger", "confirmed")}
        {this.renderCase(summary.active, 0, "text-primary", "active")}
        {this.renderCase(summary.recovered, summary.new_recovered, "text-success", "recovered")}
        {this.renderCase(summary.dead, summary.new_dead, "", "dead")}
      </Row>
    );
  }
}

export default Overview;
