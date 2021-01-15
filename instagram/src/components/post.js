import React, { useEffect, useRef, useState } from 'react'
import M from 'materialize-css'


const Post = ({avatarUrl, postedUser, imgUrls, dateTime}) => {

    const carousel=useRef(null)
    const carouselInstance=useRef(null)
    const [number, SetNumber]=useState(0)

    useEffect(()=>{
        carouselInstance.current=M.Carousel.init(carousel.current, {
            fullWidth: true,
            indicators: imgUrls.length===1 ? false: true
        })

    }, [imgUrls])

    return (
        <>
            <div className='container'>
                <div className='collection post'>
                    <div class="collection-item avatar valign-wrapper">
                        <img src={avatarUrl} alt="" class="circle" />
                        <span class="title">{postedUser}</span>
                        <a href="" class="secondary-content black-text"><i className='material-icons'>more_horiz</i></a>
                    </div>
                </div>
                <div className='post-content'>
                    <div className='carousel carousel-slider post-corousel' ref={carousel}>
                        {
                            imgUrls.map(el=><div className='carousel-item'><img src={el}/></div>)
                        }
                    </div>
                    {
                        number>0 && <span className='back' onClick={()=>{carouselInstance.current.prev(); SetNumber(number-1)}}><i className='material-icons'>chevron_left</i></span>
                    }
                    {number<imgUrls.length-1 && <span className='next' onClick={()=>{carouselInstance.current.next(); SetNumber(number+1)}}><i className='material-icons'>chevron_right</i></span>
                    }
                </div>
                <div className='post-bottom'>
                    
                </div>
            </div>
        </>
    )
}

export default Post