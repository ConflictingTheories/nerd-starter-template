/*                                            *\
** ------------------------------------------ **
**           Sample - NERD Starter    	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

import React from "react";
import { collect } from "react-recollect";

// RSuite UI Library
import { Container, Content, Row, Col } from "rsuite";
import "rsuite/dist/styles/rsuite-dark.css";

// BLUEPRINT STYLES
import { Button, Tabs, Tab, NonIdealState } from "@blueprintjs/core";
import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

import NavBar from "../../components/nav";
import SideMenu from "../../components/menu";

// ASSETS & APP STYLES
import "../../styles/App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    this.store = props.store;

    this.state = {};
  }

  renderDashboardTabs() {}

  async componentDidMount() {}

  render() {
    return (
      <Row>
        <Col>
          <SideMenu
            activeKey={"1"}
            style={{ flex: 1, flexShrink: 1, flexGrow: 0 }}
          />
        </Col>
        <Col>
          <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
            <Container>
              <NavBar
                isLogin={false}
                renderBrand={this.renderClientSelect}
                renderBar={() => null}
                renderRight={() => null}
              />
              <Content>{this.renderDashboardTabs()}</Content>
            </Container>
          </div>
          {/* MEETING sidebar */}
        </Col>
      </Row>
    );
  }
}

export default collect(Dashboard);
