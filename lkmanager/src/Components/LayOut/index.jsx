import React from 'react';
import LKHeader from './../../Components/Header/LKHeader';
import LKAside from './../../Components/Aside/LKAside';
import { withRouter } from 'react-router-dom'; //引入withRouter
class LayOut extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   // let { history, match } = this.props;
  //   // history.listen(location => {
  //   //   console.log(match);
  //   //   console.log('location:', location);
  //   //   console.log(match.path);
  //   //   console.log('location.pathname:', location.pathname);
  //   //   console.log('window.location:', window.location);
  //   //   // if (match.path !== location.pathname) {
  //   //   // }
  //   // });
  // }

  render() {
    return (
      <>
        <div>
          <LKHeader />
          <div className="main">
            <LKAside />
            {this.props.children}
          </div>
          <button
            type="submit"
            className="btn btn-success btn-warning pull-right"
            style={{ marginRight: 10 }}
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            返回
          </button>
        </div>
      </>
    );
  }
}
export default withRouter(LayOut);
// export default LayOut;
