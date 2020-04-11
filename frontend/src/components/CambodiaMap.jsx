import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import isEmpty from "lodash/isEmpty";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { injectIntl, FormattedMessage } from 'react-intl';

import mapDataCambodia from './mapDataCambodia';

require('highcharts/modules/map')(Highcharts);

@connect((store) => {
  return {
    provinces: store.dashboardReducers.provinces,
    locale: store.intl.locale
  };
}, {})
class CambodiaMap extends React.Component {
  state = {
    value: 1
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  }

  renderName(row) {
    let {locale} = this.props;
    if(locale === "en" && !isEmpty(row.province_en)) {
      return row.province_en;
    }

    return row.province;
  }

  renderCode(row) {
    let code = row.code;
    if (code < 10) {
      code = "0" + code;
    }
    return "KH" + code;
  }

  getColor() {
    const value = this.state.value;
    const colors = ['#c4183c','#007bff','#17c671','#212529'];
    return colors[value];
  }

  getValue(province) {
    const value = this.state.value;
    if(value === 0 ) {
      return province.confirmed;
    } else if(value === 1 ) {
      return province.active;
    } else if(value === 2 ) {
      return province.recovered;
    } else if(value === 3 ) {
      return province.dead;
    }

    return province.active;
  }

  getCase() {
    const value = this.state.value;
    if(value === 0 ) {
      return "confirmed";
    } else if(value === 1 ) {
      return "active";
    } else if(value === 2 ) {
      return "recovered";
    } else if(value === 3 ) {
      return "dead";
    }

    return "active";
  }

  render() {
    const {provinces, intl} = this.props;
    if(isEmpty(provinces)) {
      return(<div/>);
    }

    const data = provinces.map((province) => {
      return {
        name: this.renderName(province),
        code: this.renderCode(province),
        value: this.getValue(province),
        active: province.active,
        confirmed: province.confirmed,
        recovered: province.recovered,
        dead: province.dead,
      };
    });

    const mapOptions = {
      title: {
        text: '<strong class="pt-3">' + intl.formatMessage({id: "case." + this.getCase()}) + '</strong>'
      },
      tooltip: {
        formatter: function () {
         return "<strong>" + this.point.options.name + "</strong>"
          + "<br>" + intl.formatMessage({id: "case.confirmed"}) + " : " + this.point.options.confirmed
          + "<br>" + intl.formatMessage({id: "case.active"}) +  ": " + this.point.options.active
          + "<br>" + intl.formatMessage({id: "case.recovered"}) + " : " + this.point.options.recovered
          + "<br>" + intl.formatMessage({id: "case.dead"}) + " : " + this.point.options.dead;
        }
       },
      colorAxis: {
        min: 0,
        minColor: "#FFFFFF",
        maxColor: this.getColor(),
      },

      series: [
        {
          mapData: mapDataCambodia,
          joinBy: ['HRPCode', 'code'],
          data: data
        }
      ]
    };
    return (
      <div className="pt-3 bg-white">
        <HighchartsReact
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
          className="pt-3"
        />
        <Paper className="mb-1">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label={<FormattedMessage id="case.confirmed" defaultMessage="Confirmed" />} className="text-danger" />
            <Tab label={<FormattedMessage id="case.active" defaultMessage="Active" />} className="text-primary" />
            <Tab label={<FormattedMessage id="case.recovered" defaultMessage="Recovered" />} className="text-success"/>
            <Tab label={<FormattedMessage id="case.dead" defaultMessage="Dead" />} className=""/>
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default injectIntl(CambodiaMap);
