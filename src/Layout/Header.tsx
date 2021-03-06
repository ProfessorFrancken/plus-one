import React from "react";
import {Route, NavLink} from "react-router-dom";
import {useOrder} from "App/Products/OrdersContext";
import {useCommittees} from "App/Committees/CommitteesContext";

const CommitteeTitle = ({
  match: {
    params: {page},
  },
}: any) => {
  const {committees = []} = useCommittees();
  const selectedCommittee = committees.find(({id}: any) => id === parseInt(page, 10));

  return <span>{selectedCommittee ? selectedCommittee.name : "Unknown committee"}</span>;
};

const BuyProductsForMemberTitle = () => {
  const {order} = useOrder();

  if (order.member === undefined) {
    console.warn("Tried rendering header for undefined member", order);
    return null;
  }

  return <span>{order.member.fullname}</span>;
};

const HeaderTitle = () => (
  <h1 className="titleName header-item h4 d-flex align-items-center font-weight-normal mb-0">
    <Route exact path="/pricelist" render={() => <span>Pricelist</span>} />
    <Route exact path="/settings" render={() => <span>Settings</span>} />
    <Route exact path="/prominent" render={() => <span>Prominent</span>} />
    <Route exact path="/recent" render={() => <span>Recent</span>} />
    <Route exact path="/committees" render={() => <span>Committees</span>} />
    <Route exact path="/statistics" render={() => <span>Statistics</span>} />
    <Route exact path="/screensaver" render={() => <span>Screensaver</span>} />
    <Route exact path="/committees/:page(\d+)" component={CommitteeTitle} />
    <Route exact path="/products" component={BuyProductsForMemberTitle} />
    <Route exact path="/present" render={() => <span>Present</span>} />
  </h1>
);

const Header = ({onClick, failedOrders}: any) => (
  <header className="header">
    <HeaderTitle />
    <div className="header-item d-flex justify-content-center">
      <Route
        exact
        path="/products"
        render={() => (
          <NavLink exact to="/pricelist">
            Show prices
          </NavLink>
        )}
      />
      <Route
        exact
        path="/pricelist"
        render={() => (
          <NavLink exact to="/products">
            Buy products
          </NavLink>
        )}
      />
    </div>
    <h2
      className="association header-item text-right h4 d-flex align-items-center font-weight-normal mb-0"
      onClick={onClick}
    >
      T.F.V. 'Professor Francken'
    </h2>
    {failedOrders > 0 && (
      <div className="ml-3">
        <NavLink exact to="/settings">
          <div className="badge badge-danger">{failedOrders}</div>
        </NavLink>
      </div>
    )}
  </header>
);

export default Header;
