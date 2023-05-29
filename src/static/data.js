import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Link, useNavigate } from 'react-router-dom';


const slideBarItems={
    top:[
        {icon: <HomeOutlinedIcon className='slbar-icons'/>  , name:"Home"},
        {icon:<VideoCameraFrontOutlinedIcon className='slbar-icons' />  , name:"Shorts"},
        {icon:<SubscriptionsOutlinedIcon className='slbar-icons'/>  , name:"Subscription"},
    ],
    middle:[
        {icon:<VideoLibraryOutlinedIcon className='slbar-icons'/>  , name:"Library"},
        {icon:<HistoryOutlinedIcon className='slbar-icons'/>  , name:"History"},
        {icon:<OndemandVideoOutlinedIcon className='slbar-icons'/>  , name:"Your videos"},
        {icon:<AccessTimeIcon className='slbar-icons'/>  , name:"Wathch later"},
        {icon:<ThumbUpOutlinedIcon className='slbar-icons'/>  , name:"liked videos"},
    ],
    explore:[
        {icon:<WhatshotOutlinedIcon className='slbar-icons'/>  , name:"Trending"},
        {icon:<MusicNoteOutlinedIcon className='slbar-icons'/>  , name:"Music"},
        {icon:<MovieFilterOutlinedIcon className='slbar-icons'/>  , name:"Movies"},
        {icon:<LiveTvIcon className='slbar-icons'/>  , name:"Live"},
        {icon:<SportsEsportsOutlinedIcon className='slbar-icons'/>  , name:"Gaming"},
        {icon:<FeedOutlinedIcon className='slbar-icons'/>  , name:"News"},
        {icon:<EmojiEventsOutlinedIcon className='slbar-icons'/>  , name:"Sports"},
        {icon:<EmojiObjectsOutlinedIcon className='slbar-icons'/>  , name:"Learning"},
        {icon:<DryCleaningOutlinedIcon className='slbar-icons'/>  , name:"Fashion & Beauty"},
    ],
    setting:[
        {icon:<SettingsOutlinedIcon className='slbar-icons'/>  , name:"Setting"},
        {icon:<OutlinedFlagIcon className='slbar-icons'/>  , name:"Report history"},
        {icon:<HelpOutlineOutlinedIcon className='slbar-icons'/>  , name:"Help"},
        {icon:<FeedbackOutlinedIcon className='slbar-icons'/>  , name:"Send feedback"},
    ]
}

export const categoryItem = [
    "All","Music","Mixes","Comedy","JavaScripts","Live","Gadgets","Lessons","Recently","Watched","New you",
    ,"Cooking"
]

export default slideBarItems;