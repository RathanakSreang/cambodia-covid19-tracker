import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Moment from 'react-moment';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import MapIcon from '@material-ui/icons/Map';
// import ListIcon from '@material-ui/icons/List';

import Overview from "./../components/Overview";
import Provinces from "./../components/Provinces";
import NoRecord from "./../components/NoRecord";
// import CambodiaMap from "./../components/CambodiaMap";
const Container = styled.div`
`;

@connect((store) => {
  return {
    lastFetchAt: store.dashboardReducers.lastFetchAt,
    isFetching: store.dashboardReducers.isFetching
  };
}, {})
class HomePage extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  }

  render() {
    const {lastFetchAt, isFetching} = this.props;
    if(isFetching) {
      return(<NoRecord isFetching={true}/>);
    }

    return (
      <Container className="container">
        {
          lastFetchAt &&
          <div className="text-right">
            <p className="mb-1 mr-2">
              <FormattedMessage id="app.updated_at" defaultMessage="Updated:" />
              <span className="text-success">
                <Moment format="DD/MM/YYYY, h:mmA">{lastFetchAt}</Moment>
              </span>
            </p>
          </div>
        }
        <Overview/>
        <Provinces/>
      </Container>
    );
  }
}

export default HomePage;
// <Paper className="mb-1">
//           <Tabs
//             value={this.state.value}
//             onChange={this.handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             centered
//           >
//             <Tab icon={<ListIcon />} label={<FormattedMessage id="label.table" defaultMessage="List" />}/>
//             <Tab icon={<MapIcon />} label={<FormattedMessage id="label.map" defaultMessage="Map" />}/>
//           </Tabs>
//         </Paper>
//         {
//           this.state.value === 1 &&
//           <CambodiaMap/>
//         }
//         {
//           this.state.value !== 1 &&
//         }
