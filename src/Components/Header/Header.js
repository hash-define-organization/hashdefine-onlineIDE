import React from "react";
import "./Header.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from '@mui/icons-material/Download';
import MoonIcon from "@mui/icons-material/NightsStay";
import { connect } from "react-redux";
import themeAction from "../../Actions/theme";
import fontSizeAction from "../../Actions/fontSize";
import changeLanguage from "../../Actions/currentLanguage";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(event) {
    const language = event.target.value;
    const id = this.props.languages.find(
      (language) => language.value === event.target.value
    ).id;

    this.props.changeLanguage({ language, id });
  }

  changeTheme() {
    this.props.themeAction();
  }

  changeFontSize(event) {
    this.props.fontSizeAction(event.target.value);
  }

  render() {
    const downloadCode = () => {
      const element = document.createElement("a");
      const file = new Blob([this.props.code], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `code.${this.props.selectedLanguage}`;
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    };

    return (
      <div className={`header`}>
        <div className="header__left">
          <div className="header__title">DEFINE IDE</div>
        </div>
        <div className="header__right">
          <button className="downloadbtn" title="download source code" ><DownloadIcon  onClick={downloadCode} className="downloadIcon" color="primary" /></button>
          {/* <Button variant="contained" color="secondary" >Download</Button> */}
          <select
            value={this.props.fontSize}
            onChange={this.changeFontSize}
            className="language__select"
            name="fontSize__choice"
          >
            {[12, 14, 16, 18].map((fontSize) => {
              return (
                <option key={fontSize} value={fontSize}>
                  {fontSize}px
                </option>
              );
            })}
          </select>
          <select
            value={this.props.selectedLanguage}
            onChange={this.changeLanguage}
            className="language__select"
            name="language__choice"
          >
            {this.props.languages.map((language) => {
              return (
                <option key={language.id} value={language.value}>
                  {language.name}
                </option>
              );
            })}
          </select>
          <a
            className="github--link"
            href="https://github.com/hash-define-organization/"
          >
            <GitHubIcon className="icon githubIcon" />
          </a>
          {this.props.theme === "light" ? (
            <MoonIcon
              className="icon themeIcon moonIcon"
              onClick={this.changeTheme}
            />
          ) : (
            <LightModeIcon
              className="icon themeIcon"
              onClick={this.changeTheme}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // console.log(state)
  return {
    theme: state.theme,
    fontSize: state.fontSize,
    languages: state.languages,
    selectedLanguage: state.currentLanguage.selectedLanguage,
    selectedId: state.currentLanguage.selectedId,
    code: state.code.code,
  };
}

export default connect(mapStateToProps, {
  themeAction,
  fontSizeAction,
  changeLanguage,
})(Header);
