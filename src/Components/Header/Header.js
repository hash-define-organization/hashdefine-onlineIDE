import React from 'react';
import './Header.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import BrushIcon from '@mui/icons-material/Brush';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoonIcon from '@mui/icons-material/NightsStay';
import { connect } from 'react-redux';
import themeAction from '../../Actions/theme';
import fontSizeAction from '../../Actions/fontSize';
import changeLanguage from '../../Actions/currentLanguage';



/* This is the Header class, it is divided into two sections Header_left and Header_right
Header_left is mainly to display our symbol for IDE, whereas Header_right shows us different options,
like to change font, change language, also github link for the HASH-IDE repository and finally a button to change theme, dark to light theme. */
class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeFontSize = this.changeFontSize.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event) {
        const language = event.target.value;
        const id = this.props.languages.find(language => language.value === event.target.value).id

        this.props.changeLanguage({language, id});
    }

    changeTheme() {
        this.props.themeAction()
    }
    
    changeFontSize(event) {
        this.props.fontSizeAction(event.target.value);
    }
    
    
    
    render() {

        
        return ( 
            <div className = {`header`}>
                <div className="header__left">
                    <div className = "header__title">
                        DEFINE IDE
                    </div>
                </div>
                <div className="header__right">
                    <select value={this.props.fontSize} onChange={this.changeFontSize} className = "language__select" name='fontSize__choice'>
                        {
                            [12, 14, 16, 18].map(fontSize => {
                                return (
                                    <option key={fontSize} value={fontSize}>{fontSize}px</option>
                                )
                            })
                        }
                    </select>
                    <select value={this.props.selectedLanguage} onChange={this.changeLanguage} className = "language__select" name='language__choice'>
                        {
                            this.props.languages.map(language => {
                                return (
                                    <option key={language.id} value={language.value}>{language.name}</option>
                                )
                            })
                        }
                    </select>
			  <a className='github--link' href = "/sketch">
                        <BrushIcon className="icon githubIcon" />
                    </a>
                    <a className='github--link' href='https://github.com/hash-define-organization/'>
                        <GitHubIcon className="icon githubIcon" />
                    </a>
                    
    
                    
                    {
                        this.props.theme === 'light' ? 
                            
                            <MoonIcon className="icon themeIcon  moonIcon" onClick={this.changeTheme} /> 
                            :
                            
                            <LightModeIcon className="icon themeIcon sunIcon" onClick={this.changeTheme} />
                        
                    }
                

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
        selectedId: state.currentLanguage.selectedId
    }
}

export default connect(mapStateToProps, {themeAction, fontSizeAction, changeLanguage})(Header);