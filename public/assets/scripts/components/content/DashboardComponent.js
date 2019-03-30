import React, { Component } from 'react';

class DashboardComponent extends Component {
  render() {
    return (

         <main className="main-content bgc-grey-100">
           <div id="mainContent">

      <div className="row gap-20 masonry pos-r">
        <div className="masonry-sizer col-md-6" />
        <div className="masonry-item  w-100">
          <div className="row gap-20">

            <div className="col-md-3">
              <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                  <h6 className="lh-1">Total Leads</h6>
                </div>
                <div className="layer w-100">
                  <div className="peers ai-sb fxw-nw">
                    <div className="peer peer-greed">
                      <span id="sparklinedash" />
                    </div>
                    <div className="peer">
                      <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{this.props.totalLeads}</span>
                      <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{this.props.totalLeadsPercentage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                  <h6 className="lh-1">Total Emails Opened</h6>
                </div>
                <div className="layer w-100">
                  <div className="peers ai-sb fxw-nw">
                    <div className="peer peer-greed">
                      <span id="sparklinedash2" />
                    </div>
                    <div className="peer">
                      <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">{this.props.totalEmailsOpened}</span>
                      <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">{this.props.totalEmailsOpenedPercentage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                  <h6 className="lh-1">Email Open Rate</h6>
                </div>
                <div className="layer w-100">
                  <div className="peers ai-sb fxw-nw">
                    <div className="peer peer-greed">
                      <span id="sparklinedash4" />
                    </div>
                    <div className="peer">
                      <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">{this.props.emailOpenRate}</span>
                      <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">{this.props.emailOpenRatePercentage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry-item row gap-20">

          <div className="bd bgc-white">
            <div className="layers">
              <div className="layer w-100 p-20">
                <h6 className="lh-1">Leads Report</h6>
              </div>
              <div className="layer w-100">
                <div className="bgc-light-blue-500 c-white p-20">
                  <div className="peers ai-c jc-sb gap-40">
                    <div className="peer peer-greed">
                      <h5>February 2019</h5>
                      <p className="mB-0">Overview</p>
                    </div>
                    <div className="peer">
                      <h3 className="text-right">430 Leads</h3>
                    </div>
                  </div>
                </div>
                <div className="table-responsive p-20">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className=" bdwT-0">Name</th>
                        <th className=" bdwT-0">Status</th>
                        <th className=" bdwT-0">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-600">Item #1 Name</td>
                        <td><span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Unavailable</span> </td>
                        <td>Nov 18</td>
                      </tr>
                      <tr>
                        <td className="fw-600">Item #2 Name</td>
                        <td><span className="badge bgc-deep-purple-50 c-deep-purple-700 p-10 lh-0 tt-c badge-pill">New</span></td>
                        <td>Nov 19</td>
                      </tr>
                      <tr>
                        <td className="fw-600">Item #3 Name</td>
                        <td><span className="badge bgc-pink-50 c-pink-700 p-10 lh-0 tt-c badge-pill">New</span></td>
                        <td>Nov 20</td>
                      </tr>
                      <tr>
                        <td className="fw-600">Item #4 Name</td>
                        <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c badge-pill">Unavailable</span></td>
                        <td>Nov 21</td>
                      </tr>
                      <tr>
                        <td className="fw-600">Item #5 Name</td>
                        <td><span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Used</span></td>
                        <td>Nov 22</td>
                      </tr>
                      <tr>
                        <td className="fw-600">Item #6 Name</td>
                        <td><span className="badge bgc-orange-50 c-orange-700 p-10 lh-0 tt-c badge-pill">Used</span> </td>
                        <td>Nov 23</td>
                      </tr>
                      <tr>
                        <td className="fw-600">Item #7 Name</td>
                        <td><span className="badge bgc-yellow-50 c-yellow-700 p-10 lh-0 tt-c badge-pill">Old</span></td>
                        <td>Nov 22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
      </main>
    );
}
}

export default DashboardComponent;
