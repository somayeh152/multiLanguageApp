import React from 'react';
import './sass/inviteFriends.css';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import {FormattedMessage} from 'react-intl';

function InviteFriends(props) {
    return(
        <div>
            {/* <Header /> */}
            <div className="mainSection inviteFriends">
                <div className="bannerSection">
                    <div className="banner-body row">
                        <div className="col-xs-12 col-sm-6">
                            <h1 className="banner-title">
                            <FormattedMessage
                            id="InviteFriendsHeadline"
                            // defaultMessage="some text here"
                            value={props.locale}
                            ></FormattedMessage>
                                {/* Get free access by inviting your friends */}
                            </h1>
                            {console.log('chi dari: ',props.locale)}
                            <h2 className="banner-subheader">
                            <FormattedMessage
                            id="InviteFriendsSubHeadline"
                            // defaultMessage="some text here"
                            value={props.locale}
                            ></FormattedMessage>
                            {/* For every friend who joins Blinkist we'll give you 7 days of unlimited access */}
                            </h2>
                        </div>
                        <div className="holderImage col-xs-12 col-sm-5"></div>
                    </div>
                </div>
                <div className="inviteLinkHolder">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-wrapper">
                                <div className="inviteTitle"> Share this link to invite your friends </div>
                                <div className="referral-link">
                                    <input readonly="readonly" value="https://www.blinkist.com/fffffffffe" />
                                    <a className="link" href="#"></a>
                                </div>
                                <div className="socialLinks"> Share on 
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                {/* <a data-action="share-facebook" data-action-url="#login_facebookAccessToken" data-name="Blinkist: Serving curious minds." data-caption="Blinkist" data-description="Blinkist offers summaries of great nonfiction books’ key insights in a made for mobile format. Learn something new every day - on your smartphone, tablet or PC." className="referral-form-hints__share-link--fb js-fb-referral-submit" href=""></a>
                                <a data-action="share-twitter" data-title="Check out Blinkist, my personal reading assistant! Follow this link for your 24-hour trial:" data-url="http://blinki.st/46289600f3a8" className="referral-form-hints__share-link--tw js-tw-referral-link" href=""></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default InviteFriends;
