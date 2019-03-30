import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

const initialState = {
  stats: {
    totalLeads: 120,
    totalLeadsPercentage: "+10%",
    totalEmailsOpened: 100,
    totalEmailsOpenedPercentage: "+9%",
    emailOpenRate: "88%",
    emailOpenRatePercentage: "+8.9%"
  },
  connectedAccounts: {
    connectedGmailAccounts: [],
    connectedFacebookAccounts: []
  },
  emailTemplates: {
    connectedGmailAccountId: "",
    connectedFacebookAccountId: "",
    connectedFacebookFormId: "",
    behaviour: "",
    createdOn: "",
    noOfEmailsSent: 10,
    noOfEmailsOpened: 7
  }
};

function rootReducer(state = initialState, action) {
  return state;
};

export default store;
