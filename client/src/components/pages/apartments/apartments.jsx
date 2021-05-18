import React, { Component } from "react";
import Helmet from "react-helmet";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ContentWrap from "../../common/content-wrap";
import { connect } from "react-redux";
import ApartmentArchiveBlock from "../../common/apartment/archive-apartment";

class ApartmentsPage extends Component {
  render() {
    return (
      <div className={`apartments-page-wrap`}>
        <Breadcrumb title={"Stanovi"} />
        <Helmet>
          <title>Gening | Stanovi</title>
        </Helmet>
        <ContentWrap isBoxed={true}>
          <ApartmentArchiveBlock number={50} />
        </ContentWrap>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.apartments.apartments,
  };
};

export default connect(mapStateToProps)(ApartmentsPage);
