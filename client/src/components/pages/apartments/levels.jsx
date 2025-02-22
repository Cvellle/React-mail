import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import OurValuesSection from "../../sections/ourvalues/ourvalues";

const getPageId = () => {
  let hash = window.location.hash;
  let regex = /^#page-(\d+)/g;
  if (regex.test(hash)) {
    return parseInt(hash.replace(regex, "$1")) - 1;
  }
  return 0;
};

class Levels extends Component {
  constructor(props) {
    super(props);
    let currentPage = getPageId();
    let start = currentPage * this.props.number;
    this.state = {
      items: this.props.items.slice(start, start + this.props.number),
      pages: Math.ceil(this.props.items.length / this.props.number),
      currentPage: currentPage,
    };
  }

  updatePage(page) {
    let start = page * this.props.number;
    window.location.hash = `page-${page + 1}`;
    this.setState({
      items: this.props.items.slice(start, start + this.props.number),
      currentPage: page,
    });
  }

  render() {
    return (
      <div className={`apartment-block-wrap`}>
        <Breadcrumb title={"Stanovi"} />
        <div
          className={`row${
            this.props.noGutters ? " no-gutters" : ""
          } col-md-10 m-auto py-3 py-md-5`}
        >
          {[...Array(7).keys()].map((el, i) => (
            <div className="col-lg-4 col-sm-6 levelThumb mx-auto" key={i}>
              <Link to={i === 6 ? `/spratovi/poslovni` : `/spratovi/sprat${i}`}>
                <div className="property">
                  <div className="property-wrap">
                    <div className="post-thumbnail">
                      <img
                        className="img-apartment"
                        src={`/assets/images/apartment/spratovi/${i}sprat.jpg`}
                        alt={`sprat ${i}`}
                      />
                    </div>
                    <div className="entry-content text-center text-uppercase">
                      <div className="property-title text-white">
                        <div>
                          {" "}
                          <span>
                            {i === 6
                              ? "POSLOVNI PROSTOR"
                              : i === 5
                              ? "POVUČENI SPRAT"
                              : i === 0
                              ? `PRIZEMLJE`
                              : `SPRAT ${i}`}
                          </span>
                        </div>
                      </div>
                      <div className="link-more">
                        <span>Saznaj više</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>{" "}
        <div>
          <OurValuesSection />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.apartments.apartments,
  };
};

export default connect(mapStateToProps)(Levels);
