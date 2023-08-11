import PropTypes from 'prop-types';
export const NAME = 'Andrea Berrocal';

export const USER_NAME = '@Andrea_Berrocal@dev.social';

export const IMAGE = '/AndreaBerrocal.png';

export const SUMMARY = 'Junior Software Engineer @ American Express';

export const PROFILE_STATS = {
    'cats' : 2,
    'followers': 1000,
    'following': 1000,
};

export const FEED_SECTIONS = ['Posts', 'Projects', 'About', 'Contact'];

export const feedProptypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    photo: PropTypes.string,
    timestamp: PropTypes.string,
  };

export const POST_DISPLAY_ITEMS = ['Excited to announce I just got accepted into Multiverse!', 'Succesfully finished my first jira story. It was originally a spike but I was able to impliment a solution as well.']