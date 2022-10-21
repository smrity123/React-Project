import React, { Component } from 'react'
import VideoListItem from './video-list-item';
class VideoList extends Component {
    render() { 
        return (
            <div className='col-md-4'>
                <ul className="list-group">
                    <VideoListItem 
                    src='https://i.ytimg.com/vi/7-4QNxNKCms/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRoTFsNOHewvs2h3-CDenlYQYFsQ'
                    title='Allah Nariderke Kivabe Sristi Korechen? Woman Creating - ik'
                    />
                    <VideoListItem 
                    src='https://i.ytimg.com/vi/JnX7Oc8LqD8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD01Q4ShKPbiO7qJnymYlTb7YDl-A'
                    title='সূরা আর রহমান (الرحمن) - মন জুড়ানো তেলাওয়াত | Zain Abu'

                    />
                    <VideoListItem 
                    src='https://i.ytimg.com/an_webp/guAQr5eqv2Y/mqdefault_6s.webp?du=3000&sqp=CMK23ZgG&rs=AOn4CLDMDIVNdaLcVSSMrBHI4oFvquGcKA'
                    title='দা-জ্জা-ল সম্পর্কে অজানা কিছু তথ্য। আবু ত্বহা মুহাম্মাদ আদনান।'

                    />
                    <VideoListItem 
                    src='https://i.ytimg.com/vi/CSB8DohoFfA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCBxFRqYgxB0GWwLnCTTctrgDdXA'
                    title='Bebshar Poristhiti, ব্যবসার পরিস্থিতি | Aly Hasan | Rap Song'

                    />
                    <VideoListItem 
                    src='https://i.ytimg.com/an_webp/_vgo6km2wnQ/mqdefault_6s.webp?du=3000&sqp=CNSo3ZgG&rs=AOn4CLAp-5iJgPiwcuGMEXoH78RVwUKN1g'
                    title='Pyar Tune Kya Kiya | College Crush Love Story | Ptkk New'

                    />
                </ul>
            </div>
        );
    }
}
 
export default VideoList;