import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

class NewsDetailDrawer extends React.Component {
  toggleDrawer = () => {
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggleDrawer}>Open</Button>
        <Drawer anchor="right" open={false} onClose={this.toggleDrawer}>
          Hello
        </Drawer>
      </div>
    );
  }

}

export default NewsDetailDrawer;
